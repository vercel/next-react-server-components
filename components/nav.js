import Link from 'next/link'

export default function Nav() {
  ;<ul className="nav-ul">
    <Item href="/newest">new</Item>
    <Item href="/show">show</Item>
    <Item href="/ask">ask</Item>
    <Item href="/jobs">jobs</Item>
    <Item href="/submit">submit</Item>

    <style
      dangerouslySetInnerHTML={{
        __html: `
      .nav-ul {
        list-style-type: none;
      }
      .nav-ul li {
        display: inline-block;
      }
      .nav-ul li a {
        display: inline-block;
        padding: 10px;
        font-size: 11px;
        text-transform: uppercase;
        text-decoration: none;
        color: #000;
      }
      .nav-ul li a:hover {
        color: #fff;
      }
    `,
      }}
    />
  </ul>
}

const Item = ({ href, children }) => (
  <li>
    <Link href={href}>
      <a>{children}</a>
    </Link>
  </li>
)
