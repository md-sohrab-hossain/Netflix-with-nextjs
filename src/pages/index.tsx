import Head from 'next/head';
import type { NextPage } from 'next';
import Banner from 'components/molecules/banner';
import NavBar from 'components/molecules/navBar';

const Home: NextPage = () => {
  return (
    <div className="p-home">
      <Head>
        <title>NetFlix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar userName="sajal@gmail.com" />

      <main className="p-home__body">
        <Banner title="Clifford the red dog" subtitle="a very cute dog" imgUrl="/static/background.png" />
      </main>
    </div>
  );
};

export default Home;
