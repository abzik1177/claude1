const OWNER = 'abzik1177';
const REPO = 'claude1';
const BRANCH = 'main';

function slugify(title) {
  const map = { "'": '', '’': '', '‘': '', 'ʻ': '', '`': '', 'o‘': 'o', 'g‘': 'g' };
  let s = title.toLowerCase();
  for (const [from, to] of Object.entries(map)) s = s.split(from).join(to);
  s = s
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
  return s || 'maqola';
}

function yamlString(value) {
  return `"${String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

export default async (request) => {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ ok: false, error: 'Method not allowed' }), { status: 405 });
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return new Response(JSON.stringify({ ok: false, error: "Noto'g'ri so'rov" }), { status: 400 });
  }

  const { password, title, description, tags, body } = payload || {};

  if (!process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD) {
    return new Response(JSON.stringify({ ok: false, error: "Parol noto'g'ri" }), { status: 401 });
  }

  if (!title || !description || !body) {
    return new Response(JSON.stringify({ ok: false, error: "Sarlavha, tavsif va matn to'ldirilishi shart" }), { status: 400 });
  }

  if (!process.env.GITHUB_TOKEN) {
    return new Response(JSON.stringify({ ok: false, error: 'Server sozlanmagan (GITHUB_TOKEN yo‘q)' }), { status: 500 });
  }

  const slug = slugify(title);
  const path = `src/content/blog/${slug}.md`;
  const tagList = (tags || 'Maqola')
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean);

  const frontmatter = [
    '---',
    `title: ${yamlString(title)}`,
    `description: ${yamlString(description)}`,
    `pubDate: ${todayISO()}`,
    `tags: [${tagList.map(yamlString).join(', ')}]`,
    'draft: false',
    '---',
    '',
    body,
    '',
  ].join('\n');

  const apiUrl = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${path}`;
  const ghHeaders = {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    Accept: 'application/vnd.github+json',
    'Content-Type': 'application/json',
    'User-Agent': 'ipnishon-admin',
  };

  const existing = await fetch(`${apiUrl}?ref=${BRANCH}`, { headers: ghHeaders });
  if (existing.status === 200) {
    return new Response(
      JSON.stringify({ ok: false, error: `Shu nom bilan maqola allaqachon bor: ${slug}` }),
      { status: 409 },
    );
  }

  const commitRes = await fetch(apiUrl, {
    method: 'PUT',
    headers: ghHeaders,
    body: JSON.stringify({
      message: `Yangi blog maqolasi: ${title}`,
      content: Buffer.from(frontmatter, 'utf-8').toString('base64'),
      branch: BRANCH,
    }),
  });

  if (!commitRes.ok) {
    const errText = await commitRes.text();
    return new Response(JSON.stringify({ ok: false, error: `GitHub xatosi: ${errText.slice(0, 300)}` }), {
      status: 502,
    });
  }

  return new Response(JSON.stringify({ ok: true, slug, url: `/blog/${slug}/` }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
