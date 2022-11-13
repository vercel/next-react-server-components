import Story from './story';
import Link from 'next/link';

import styles from './stories.module.css';

export default ({ stories, page = 1, offset = null }) => (
  <div>
    {stories.map((story, i) => (
      <div key={story.id} className={styles.item}>
        {null != offset ? (
          <span className={styles.count}>{i + offset + 1}</span>
        ) : null}
        <div className={styles.story}>
          <Story {...story} />
        </div>
      </div>
    ))}
    <footer className={styles.footer}>
      <Link prefetch href={`/news?p=${page + 1}`}>
        More
      </Link>
    </footer>
  </div>
);
