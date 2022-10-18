import ItemPage from '../../components/item-page'

export default function Item({ searchParams }) {
  return <ItemPage id={searchParams.id} />
}