import '../../components/meta.css';
import styles from '../../components/page.module.css';
import Header from '../../components/header';

// Need the CSS here tho?
import Skeletons from '../../components/skeletons';

export default function Layout({ children }) {
  return (
    <div className={styles.main}>
      <Header />

      <div className={styles.page}>{children}</div>
    </div>
  );
}
