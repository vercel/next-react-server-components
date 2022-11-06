import Header from './header';

import './meta.css';
import styles from './page.module.css';

export default function Page({ children }) {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.page}>{children}</div>
    </div>
  );
}
