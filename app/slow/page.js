import { Suspense } from 'react';

// Server Components
import SystemInfo from '../../components/server-info';

// Client Components
import Page from '../../components/page';
import Story from '../../components/story';
import Footer from '../../components/footer';

// Utils
import fetchData from '../../lib/fetch-data';
import { transform } from '../../lib/get-item';
import useData from '../../lib/use-data';
import Skeletons from '../../components/skeletons';

function StoryWithData({ id }) {
  const { data } = useData(`s-${id}`, () =>
    fetchData(`item/${id}`).then(transform)
  );
  return <Story {...data} />;
}

function NewsWithData() {
  const { data: storyIds } = useData('top', () =>
    fetchData('topstories', 2000)
  );
  return (
    <>
      {storyIds.slice(0, 30).map((id) => {
        return (
          <Suspense key={id} fallback={<Skeletons />}>
            <StoryWithData id={id} />
          </Suspense>
        );
      })}
    </>
  );
}

export default function SlowPage() {
  return (
    <Page>
      <Suspense fallback={<Skeletons />}>
        <NewsWithData />
      </Suspense>
      <Footer />
      <SystemInfo />
    </Page>
  );
}
