import { useState, useEffect, useCallback } from 'react';
import { magic } from 'libs/magic-client';

export const useUserInfo = () => {
  const [userEmail, setUsername] = useState<string>('');
  const [didToken, setDidToken] = useState<string>('');

  const getUserInfo = useCallback(async () => {
    try {
      const { email, issuer } = await magic?.user?.getMetadata();
      const didToken = await magic?.user?.getIdToken();
      if (email) {
        setUsername(email);
        setDidToken(didToken);
      }
    } catch (error) {
      console.error('Error retrieving email', error);
    }
  }, []);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  return { userEmail, didToken };
};
