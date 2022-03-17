import Head from 'next/head';
import type { NextPage } from 'next';
import Banner from 'components/molecules/banner';
import Card from 'components/atom/card';

const Home: NextPage = () => {
  return (
    <div className="p-home">
      <Head>
        <title>NetFlix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-home__body">
        <Banner title="Clifford the red dog" subtitle="a very cute dog" imgUrl="/static/images/background.png" />

        <Card imgUrl="/static/images/background.png" href="#" modifiers="large" />
        <Card imgUrl="/static/images/background.png" href="#" modifiers="medium" />
        <Card imgUrl="/static/images/background.png" href="#" modifiers="small" />
      </main>
    </div>
  );
};

export default Home;
