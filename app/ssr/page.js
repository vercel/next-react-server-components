import { use } from 'react'

import Page from '../../components/page'
import Story from '../../components/story'
import Footer from '../../components/footer'

// Utils
import fetchData from '../../lib/fetch-data'
import { transform } from '../../lib/get-item'

async function getData() {
  const storyIds = await fetchData('topstories', 2000)
  const data = await Promise.all(
    storyIds
      .slice(0, 30)
      .map((id) => fetchData(`item/${id}`).then(transform))
  )

  return data;
}

export default function News(props) {
  const data = use(getData())

  return (
    <Page>
      {data.map((item, i) => {
        return <Story key={i} {...item} />
      })}
      <Footer />
    </Page>
  );
}
