import Head from 'next/head';
import type { NextPage, GetServerSideProps } from 'next';
import Banner from 'components/molecules/banner';
import CardList from 'components/molecules/cardList';
import { cardProps } from 'components/atom/card';
import { getVideos, getPopularVideos } from 'libs/getVideo';

type homePageProps = {
  disneyVideos: cardProps[];
  travelVideos: cardProps[];
  productivityVideos: cardProps[];
  popularVideos: cardProps[];
};

const Home: NextPage<homePageProps> = ({
  disneyVideos = [],
  travelVideos = [],
  productivityVideos = [],
  popularVideos = [],
}) => {
  const video: any = disneyVideos[0];

  return (
    <div className="p-home">
      <Head>
        <title>NetFlix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-home__body">
        <Banner
          title={video?.channelTitle}
          subtitle={`${video?.description.substring(0, 25)}...`}
          imgUrl={video?.imgUrl}
          videoId={video.id}
        />
        <CardList title="Disney" size="large" video={disneyVideos} />
        <CardList title="Travel" size="small" video={travelVideos} />
        <CardList title="Productivity" size="medium" video={productivityVideos} />
        <CardList title="Popular" size="small" video={popularVideos} />
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const disneyVideos = await getVideos('disney trailer');
  const productivityVideos = await getVideos('Productivity');
  const travelVideos = await getVideos('travel');
  const popularVideos = await getPopularVideos();

  return {
    props: { disneyVideos, travelVideos, productivityVideos, popularVideos },
  };
};

export default Home;
