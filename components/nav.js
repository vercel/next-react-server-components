import styles from './nav.module.css'

export default function Nav() {
  return (
    <ul className={styles['nav-ul']}>
      <Item href="/">new</Item>
      <Item href="/">show</Item>
      <Item href="/">ask</Item>
      <Item href="/">jobs</Item>
      <Item href="/">submit</Item>
    </ul>
  )
}

const Item = ({ href, children }) => (
  <li>
    <a href={href}>{children}</a>
  </li>
)
