import Head from 'next/head';
import type { NextPage } from 'next';
import Banner from 'components/molecules/banner';
import CardList from 'components/molecules/cardList';
import { useGetCommonVideos } from 'api/useGetCommonVideos';
import { useGetPopularVideos } from 'api/useGetPopularVideos';

const Home: NextPage = () => {
  const { data: disneyVideos = [] } = useGetCommonVideos('disney', 'disney trailer');
  const { data: productivityVideos = [] } = useGetCommonVideos('productivity', 'Productivity');
  const { data: travelVideos = [] } = useGetCommonVideos('travel', 'travel');
  const { data: popularVideos = [] } = useGetPopularVideos('popular');

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
      </main>
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   const disneyVideos = await getVideos('disney trailer');
//   const productivityVideos = await getVideos('Productivity');
//   const travelVideos = await getVideos('travel');
//   const popularVideos = await getPopularVideos();

//   //  const netFlixOriginal = await getVideos(requests.fetchNetFlixOriginals);
//   //  const trading = await getVideos(requests.fetchTreding);
//   //  const topRated = await getVideos(requests.fetchTopRated);
//   //  const actionMovies = await getVideos(requests.fetchActionMovies);
//   //  const horrorMovies = await getVideos(requests.fetchHorroMovies);
//   //  const romanceMovies = await getVideos(requests.fetchRomanticMovies);
//   //  const documentries = await getVideos(requests.fetchDocumentaries);

//   return {
//     props: { disneyVideos, travelVideos, productivityVideos, popularVideos },
//     // props: { netFlixOriginal, trading, topRated, actionMovies, horrorMovies, romanceMovies, documentries },
//   };
// };

export default Home;
