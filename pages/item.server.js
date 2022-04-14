import ItemPage from '../components/item.server'

export default function Item({ id }) {
  return <ItemPage id={id} />
}

export async function getServerSideProps({ query }) {
  return {
    props: {
      id: query.id
    }
  }
}