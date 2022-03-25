import { useState, useEffect, useCallback } from 'react';
import { magic } from 'libs/magic-client';

export const useUserInfo = () => {
  const [userEmail, setUsername] = useState<string>('');
  const [didToken, setDidToken] = useState<string>('');

  const getUserInfo = useCallback(async () => {
    try {
      const { email, issuer } = await (magic as any)?.user?.getMetadata();
      const didToken = await (magic as any)?.user?.getIdToken();
      if (email) {
        setUsername(email);
        setDidToken(didToken);
      }
    } catch (error) {
      console.error('Error retrieving email', error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  return { userEmail, didToken };
};
