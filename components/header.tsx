import styles from './header.module.css'
import Link from 'next/link'

const navItems = [
  { href: '/', title: 'new' },
  { href: '/', title: 'past' },
  { href: '/', title: 'show' },
  { href: '/', title: 'ask' },
  { href: '/', title: 'show' },
  { href: '/', title: 'jobs' },
  { href: '/', title: 'submit' }
]

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link href="/">
          <span className={styles.logo}>
            <span className={styles.n}>N</span>
          </span>
          <span className={styles['site-title']}>Hacker Next</span>
        </Link>
        <div className={styles.nav}>
          <ul className={styles['nav-ul']}>
            {navItems.map(({ href, title }, index) => (
              <li key={index}>
                <Link href={href} prefetch={false}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.right}>
        <Link href="/" className={styles.login} prefetch={false}>
          login
        </Link>
      </div>
    </header>
  )
}
