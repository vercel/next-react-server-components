import Page from '../components/page.client'
import Story from '../components/story.client'
import Footer from '../components/footer.client'

// Utils
import fetchData from '../lib/fetch-data'
import { transform } from '../lib/get-item'

export async function getServerSideProps() {
  const storyIds = await fetchData('topstories')
  const data = await Promise.all(
    storyIds
      .slice(0, 30)
      .map((id) => fetchData(`item/${id}`, 500).then(transform))
  )

  return {
    props: {
      data,
    },
  }
}

export default function News({ data }) {
  return (
    <Page>
      {data.map((item, i) => {
        return <Story key={i} {...item} />
      })}
      <Footer />
    </Page>
  )
}
