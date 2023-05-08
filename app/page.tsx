import Page from './news/[page]/page'

export default async function home() {
  // @ts-expect-error Server Component
  return <Page params={{ page: 1 }} />
}