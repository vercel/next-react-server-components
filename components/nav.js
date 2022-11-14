import styles from './nav.module.css'

export default function Nav() {
  return (
    <ul className={styles['nav-ul']}>
      <Item href="/newest">new</Item>
      {" | "}
      <Item href="/front">past</Item>
      {" | "}
      <Item href="/newcomments">show</Item>
      {" | "}
      <Item href="/ask">ask</Item>
      {" | "}
      <Item href="/show">show</Item>
      {" | "}
      <Item href="/jobs">jobs</Item>
      {" | "}
      <Item href="/submit">submit</Item>
    </ul>
  )
}

const Item = ({ href, children }) => (
  <li>
    <a href={href}>{children}</a>
  </li>
)
