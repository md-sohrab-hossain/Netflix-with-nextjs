import { magic } from 'libs/magic-client';
import { useQuery } from 'react-query';

export const useUserInfo = () => {
  const { data: userEmail, isSuccess } = useQuery(['userInfo'], async () => await (magic as any)?.user?.getMetadata(), {
    staleTime: 5000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    select: data => data.email,
  });

  const { data: didToken } = useQuery(['didToken'], async () => await (magic as any)?.user?.getIdToken(), {
    staleTime: 5000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!isSuccess,
  });

  return { userEmail, didToken };
};
