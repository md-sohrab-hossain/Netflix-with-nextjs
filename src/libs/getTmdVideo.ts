import axios from 'axios';
const BASE_URL = 'api.themoviedb.org/3';
const APIKEY = process.env.TMD_MOVIE_API_KEY;

const COMMON = '&vote_count.gte=1000&release_date.gte=2020-01-01&include_adult=false&include_video=true';
export const requests = {
  fetchTreding: `trending/all/week?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc${COMMON}`,
  fetchNetFlixOriginals: `discover/tv?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc${COMMON}`,
  fetchTopRated: `movie/top_rated?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc${COMMON}`,
  fetchActionMovies: `discover/movie?api_key=${APIKEY}&with_genres=28&sort_by=popularity.desc${COMMON}`,
  fetchComedyMovies: `discover/movie?api_key=${APIKEY}&with_genres=35&sort_by=popularity.desc${COMMON}`,
  fetchHorroMovies: `discover/movie?api_key=${APIKEY}&with_genres=27&sort_by=popularity.desc${COMMON}`,
  fetchRomanticMovies: `discover/movie?api_key=${APIKEY}&with_genres=10749&sort_by=popularity.desc${COMMON}`,
  fetchDocumentaries: `discover/movie?api_key=${APIKEY}&with_genres=99&sort_by=popularity.desc${COMMON}`,
};

export const getVideos = async (url: string) => {
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original';

  const response = await axios.get(`https://${BASE_URL}/${url}`);

  return response?.data?.results.map((item: any) => {
    const id = item.id;
    return {
      id,
      title: item?.original_title || item?.original_name,
      imgUrl: `${BASE_IMG_URL}${item.poster_path}`,
      description: item.overview,
      channelTitle: item?.title || item?.original_name,
      publishTime: item.release_date || '2000-01-01',
      statistics: item.vote_count,
    };
  });
};

export const getVideoDetails = async (videoId: string) => {
  const URL = `https://${BASE_URL}/movie/${videoId}?api_key=${APIKEY}&append_to_response=videos`;

  const response = await axios.get(URL);
  return response?.data;
};
