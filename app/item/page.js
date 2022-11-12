import { notFound } from 'next/navigation';
import Item from '../../components/item';

// Utils
import fetchData from '../../lib/fetch-data';
import { transform } from '../../lib/get-item';

export default async function ItemPage({ searchParams }) {
  const { id } = searchParams;
  if (!id) {
    notFound();
  }

  const data = await fetchData(`item/${id}`);
  const story = transform(data);
  return <Item story={story} />;
}

export const revalidate = 0;