import Head from 'next/head';
import type { NextPage } from 'next';
import Banner from 'components/molecules/banner';
import CardList from 'components/molecules/cardList';

const Home: NextPage = () => {
  const disnaeyVideo = [
    {
      imgUrl: '/static/images/background.png',
    },
    {
      imgUrl: '/static/images/background.png',
    },
    {
      imgUrl: '/static/images/background.png',
    },
    {
      imgUrl: '/static/images/background.png',
    },
    {
      imgUrl: '/static/images/background.png',
    },
    {
      imgUrl: '/static/images/background.png',
    },
    {
      imgUrl: '/static/images/background.png',
    },
  ];

  return (
    <div className="p-home">
      <Head>
        <title>NetFlix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-home__body">
        <Banner title="Clifford the red dog" subtitle="a very cute dog" imgUrl="/static/images/background.png" />
        <CardList title="Disney" size="large" video={disnaeyVideo} />
        <CardList title="Disney" size="medium" video={disnaeyVideo} />
        <CardList title="Disney" size="small" video={disnaeyVideo} />
      </main>
    </div>
  );
};

export default Home;
