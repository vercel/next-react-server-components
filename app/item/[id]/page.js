import { notFound } from 'next/navigation';
import Item from '../../../components/item';

// Utils
import fetchData from '../../../lib/fetch-data';
import { transform } from '../../../lib/get-item';

export default async function ItemPage({ params }) {
  const { id } = params;

  if (!id) {
    notFound();
  }

  const data = await fetchData(`item/${id}`);
  const story = transform(data);

  return <Item story={story} />;
}