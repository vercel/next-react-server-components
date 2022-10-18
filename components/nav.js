import styles from './nav.module.css'

export default function Nav() {
  return (
    <ul className={styles["nav-ul"]}>
      <Item href="/newest">new</Item>
      <Item href="/show">show</Item>
      <Item href="/ask">ask</Item>
      <Item href="/jobs">jobs</Item>
      <Item href="/submit">submit</Item>
    </ul>
  )
}

const Item = ({ href, children }) => (
  <li>
    <a href={href}>{children}</a>
  </li>
)
