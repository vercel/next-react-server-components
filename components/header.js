import Nav from './nav'
import Logo from './logo'
import Link from 'next/link'

import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link href="/">
          <span className={styles.logo}>
            <Logo />
          </span>
          <span className={styles['site-title']}>Hacker Next</span>
        </Link>
        <div className={styles.nav}>
          <Nav />
        </div>
      </div>
      <div className={styles.right}>
        <a href="/" className={styles.login}>
          login
        </a>
      </div>
    </header>
  )
}
