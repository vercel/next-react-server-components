// Server Components
import SystemInfo from '../../../components/server-info'

// Client Components
import Stories from '../../../components/stories'
import Footer from '../../../components/footer'

// Utils
import fetchData from '../../../lib/fetch-data'

export default async function RSCPage({ params }) {
  const { page } = params;
  const storyIds = await fetchData('topstories')

  return (
    <>
      <Stories page={page} storyIds={storyIds} />
      <Footer />
      <SystemInfo />
    </>
  )
}
