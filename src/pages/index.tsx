import Head from 'next/head';
import type { NextPage } from 'next';
import Banner from 'components/molecules/banner';
import CardList from 'components/molecules/cardList';
import { useGetCommonVideos } from 'api/useGetCommonVideos';
import { useGetPopularVideos } from 'api/useGetPopularVideos';

const Home: NextPage = () => {
  const {
    data: disneyVideos = [],
    isLoading: disneyVideoLoading,
    error: disneyVideoError,
  } = useGetCommonVideos('disney', 'disney trailer');

  const {
    data: productivityVideos = [],
    isLoading: productivityVideoLoading,
    error: productivityVideoError,
  } = useGetCommonVideos('productivity', 'Productivity');

  const {
    data: travelVideos = [],
    isLoading: travelVideoLoading,
    error: travelVideoError,
  } = useGetCommonVideos('travel', 'travel');

  const {
    data: popularVideos = [],
    isLoading: popularVideoLoading,
    error: popularVideoError,
  } = useGetPopularVideos('popular');

  return (
    <div className="p-home">
      <Head>
        <title>NetFlix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-home__body">
        <Banner
          title="Frozen 2"
          subtitle="Mandy Moore - When Will My Life Begin?"
          imgUrl="/static/images/frozen.png"
          videoId="bwzLiQZDw2I"
        />

        <CardList
          title="Disney"
          size="large"
          video={disneyVideos}
          isLoading={disneyVideoLoading}
          error={disneyVideoError}
        />

        <CardList
          title="Travel"
          size="small"
          video={travelVideos}
          isLoading={travelVideoLoading}
          error={travelVideoError}
        />

        <CardList
          title="Productivity"
          size="medium"
          video={productivityVideos}
          isLoading={productivityVideoLoading}
          error={productivityVideoError}
        />

        <CardList
          title="Popular"
          size="small"
          video={popularVideos}
          isLoading={popularVideoLoading}
          error={popularVideoError}
        />
      </main>
    </div>
  );
};

export default Home;
