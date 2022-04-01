import ItemPage from '../components/item.server'

export default function Item({ router }) {
  const { id } = router.query
  return <ItemPage id={id} />
}
