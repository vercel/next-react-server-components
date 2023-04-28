// Server Components
import Stories from 'components/stories'

// Utils
import fetchData from 'lib/fetch-data'

export default async function RSCPage({ params }) {
  const { page } = params
  const storyIds = await fetchData('topstories')

  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Stories page={page} storyIds={storyIds} />
    </>
  )
}
