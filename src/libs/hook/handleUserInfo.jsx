import { useState, useEffect, useCallback } from 'react';
import { magic } from 'libs/magic-client';

export const useUserInfo = () => {
  const [userEmail, setUsername] = useState('');
  const [didToken, setDidToken] = useState('');

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  return { userEmail, didToken };
};
