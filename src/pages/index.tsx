import Head from 'next/head';
import type { NextPage, GetServerSideProps } from 'next';
import Banner from 'components/molecules/banner';
import CardList from 'components/molecules/cardList';
import { cardProps } from 'components/atom/card';
import { getVideos, getPopularVideos } from 'libs/getYoutubeVideo';
// import { requests, getVideos } from 'libs/getTmdVideo';

type homePageProps = {
  disneyVideos: cardProps[];
  travelVideos: cardProps[];
  productivityVideos: cardProps[];
  popularVideos: cardProps[];

  // trading: cardProps[];
  // topRated: cardProps[];
  // netFlixOriginal: cardProps[];
  // actionMovies: cardProps[];
  // horrorMovies: cardProps[];
  // romanceMovies: cardProps[];
  // documentries: cardProps[];
};

const Home: NextPage<homePageProps> = ({
  disneyVideos = [],
  travelVideos = [],
  productivityVideos = [],
  popularVideos = [],

  // trading = [],
  // topRated = [],
  // netFlixOriginal = [],
  // actionMovies = [],
  // horrorMovies = [],
  // romanceMovies = [],
  // documentries = [],
}) => {
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
        <CardList title="Disney" size="large" video={disneyVideos} />
        <CardList title="Travel" size="small" video={travelVideos} />
        <CardList title="Productivity" size="medium" video={productivityVideos} />
        <CardList title="Popular" size="small" video={popularVideos} />

        {/* <CardList title="NETFLIX ORIGINALS" size="large" video={netFlixOriginal} />
        <CardList title="Trending Now" size="medium" video={trading} />
        <CardList title="Top Rated" size="small" video={topRated} />
        <CardList title="Action Movies" size="medium" video={actionMovies} />
        <CardList title="Horror Movies" size="small" video={horrorMovies} />
        <CardList title="Romance Movies" size="medium" video={romanceMovies} />
        <CardList title="Documentaries" size="small" video={documentries} /> */}
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const disneyVideos = await getVideos('disney trailer');
  const productivityVideos = await getVideos('Productivity');
  const travelVideos = await getVideos('travel');
  const popularVideos = await getPopularVideos();

  //  const netFlixOriginal = await getVideos(requests.fetchNetFlixOriginals);
  //  const trading = await getVideos(requests.fetchTreding);
  //  const topRated = await getVideos(requests.fetchTopRated);
  //  const actionMovies = await getVideos(requests.fetchActionMovies);
  //  const horrorMovies = await getVideos(requests.fetchHorroMovies);
  //  const romanceMovies = await getVideos(requests.fetchRomanticMovies);
  //  const documentries = await getVideos(requests.fetchDocumentaries);

  return {
    props: { disneyVideos, travelVideos, productivityVideos, popularVideos },
    // props: { netFlixOriginal, trading, topRated, actionMovies, horrorMovies, romanceMovies, documentries },
  };
};

export default Home;
