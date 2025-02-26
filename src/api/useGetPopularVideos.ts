import axios from 'axios';
import { useQuery } from 'react-query';

const fetchVideos = async (url: string) => {
  const YOUTUBE_API_KEY = 'AIzaSyBbLUUjUnCH5557Stxjn2VljiWwQynP55U';
  const BASE_URL = 'youtube.googleapis.com/youtube/v3';

  const response = await axios.get(`https://${BASE_URL}/${url}&maxResults=25&key=${YOUTUBE_API_KEY}`);

  return response?.data;
};

export const useGetPopularVideos = (params: string) => {
  const URL = 'videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=BD';
  return useQuery([params], () => fetchVideos(URL), {
    staleTime: 5000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    select: data =>
      data?.items.map((item: any) => {
        const id = item.id?.videoId || item.id;
        const snippet = item.snippet;
        return {
          title: snippet?.title,
          imgUrl: `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
          id,
          description: snippet.description,
          publishTime: snippet.publishedAt,
          channelTitle: snippet.channelTitle,
          statistics: item.statistics ? item.statistics : { viewCount: 0 },
        };
      }),
  });
};
