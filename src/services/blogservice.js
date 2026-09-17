const DATA_URL = `${import.meta.env.BASE_URL}data/blogs.json`;
let cacheData = null;

async function loadData() {
  if (cacheData) return cacheData;
  const res = await fetch(DATA_URL);
  if (!res.ok) throw new Error('Failed to fetch data');
  cacheData = await res.json();
  return cacheData;
}

export async function getBlogs() {
  const data = await loadData();
  return data.posts || [];
}

export async function getCategories() {
  const data = await loadData();
  return data.categories || [];
}

export async function getSiteInfo() {
  const data = await loadData();
  return data.siteInfo || {};
}

export const getSiteData = getSiteInfo;

export async function getBlogById(id) {
  const data = await loadData();
  return data.posts?.find(
    (post) => String(post.id) === String(id)
  );
}


