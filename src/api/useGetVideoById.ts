import axios from 'axios';
import { useQuery } from 'react-query';

const fetchVideos = async (url: string) => {
  const YOUTUBE_API_KEY = 'AIzaSyCr0x3x3lONfkKK5NhekZth8w6L1rO_P4k';
  const BASE_URL = 'youtube.googleapis.com/youtube/v3';

  const response = await axios.get(`https://${BASE_URL}/${url}&maxResults=25&key=${YOUTUBE_API_KEY}`);

  return response?.data;
};

export const useGetVideoById = (videoId: string) => {
  const URL = `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}`;
  return useQuery(['videos', videoId], () => fetchVideos(URL), {
    staleTime: 2000,
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
