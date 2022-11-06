import { Suspense } from 'react';
import Story from './story';
import Comment from './comment';
import CommentForm from './comment-form';
import fetchData from '../lib/fetch-data';
import getComments from '../lib/get-comments';
import Skeletons from './skeletons';

import styles from './item.module.css';

async function Comments({ story }) {
  if (!story) {
    return <div className={styles.loading}>No Comments</div>;
  }

  const data = await fetchData(`comments/${story.id}`);
  const comments = await getComments(data.comments);

  return (
    <div className={styles.comments}>
      {(comments || []).map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  );
}

export default function Item({ story }) {
  return (
    <div className={styles.item}>
      <Story {...story} />
      <div className={styles.form}>
        <CommentForm />
      </div>
      <Suspense
        fallback={
          <div>
            {`Loading comments...`}
            <Skeletons count={3} />
          </div>
        }
      >
        <Comments story={story} />
      </Suspense>
    </div>
  );
}
