import Header from './header'
import Meta from './meta'

import styles from './page.module.css'

export default function Page({ children }) {
  return (
    <div className={styles.main}>
      <Meta />
      <Header />
      <div className={styles.page}>{children}</div>
    </div>
  )
}
