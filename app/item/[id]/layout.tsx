import { notFound } from 'next/navigation'
import Story from 'components/story';
import CommentForm from 'components/comment-form';
import styles from './layout.module.css';
import getItem from 'lib/get-item'
import fetchData from 'lib/fetch-data'

export const dynamicParams = true;

export async function generateStaticParams() {
  // Preload the top 30 stories
  const storyIds = await fetchData('topstories')
  return storyIds.slice(0, 30).map(id => ({
    id: '' + id,
  }));
}

export default async function ItemPage({ params, children }) {
  const { id } = params
  if (!id) {
    notFound()
  }
  const story = await getItem(id)
  return (
    <div className={styles.item}>
      <Story {...story} />
      <div className={styles.form}>
        <CommentForm />
      </div>
      {children}
    </div>
  );
}
