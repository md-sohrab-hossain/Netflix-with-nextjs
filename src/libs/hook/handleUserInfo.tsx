import { magic } from 'libs/magic-client';
import { useQuery } from 'react-query';

export const useUserInfo = () => {
  const { data: userEmail, isSuccess } = useQuery(['userInfo'], async () => await (magic as any)?.user?.getMetadata(), {
    staleTime: 5000,
    select: data => data.email,
  });

  const { data: didToken } = useQuery(['didToken'], async () => await (magic as any)?.user?.getIdToken(), {
    staleTime: 5000,
    enabled: !!isSuccess,
  });

  return { userEmail, didToken };
};
