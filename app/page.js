// Server Components
import SystemInfo from '../components/server-info';

// Client Components
import Story from '../components/story';
import Footer from '../components/footer';

// Utils
import fetchData from '../lib/fetch-data';
import { transform } from '../lib/get-item';

async function StoryWithData({ id }) {
  const data = await fetchData(`item/${id}`);
  const story = transform(data);
  return <Story {...story} />;
}

export default async function RSCPage() {
  const storyIds = await fetchData('topstories');

  return (
    <>
      {storyIds.slice(0, 30).map((id) => {
        return <StoryWithData id={id} key={id} />;
      })}
      <Footer />
      <SystemInfo />
    </>
  );
}
