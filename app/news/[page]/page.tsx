import Stories from 'components/stories'
import fetchData from 'lib/fetch-data'

export const dynamicParams = true;

export async function generateStaticParams() {
  return [1];
}

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
