import { notFound } from 'next/navigation';
import Item from '../../components/item';

// Utils
import fetchData from '../../lib/fetch-data';
import { transform } from '../../lib/get-item';

export default async function ItemPage({ searchParams }) {
  const id = searchParams['id'];
  if (!id) {
    notFound();
  }

  const data = await fetchData(`item/${id}`);
  return <Item story={transform(data)} />;
}
