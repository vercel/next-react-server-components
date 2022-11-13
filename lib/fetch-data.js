export default async function fetchData(type) {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/${type}.json`);

  if (res.status !== 200) {
    throw new Error(`Status ${res.status}`);
  }
  return res.json();
}
