import axios from 'axios';
import { useQuery } from 'react-query';

const fetchVideos = async (url: string) => {
  const YOUTUBE_API_KEY = 'AIzaSyABJNr4uBd1FzbF_QQCyLCP2N4WNgFvWr8';
  const BASE_URL = 'youtube.googleapis.com/youtube/v3';

  const response = await axios.get(`https://${BASE_URL}/${url}&maxResults=25&key=${YOUTUBE_API_KEY}`);

  return response?.data;
};

export const useGetCommonVideos = (params: string, searchQuery: string) => {
  const URL = `search?part=snippet&q=${searchQuery}&type=video`;
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
