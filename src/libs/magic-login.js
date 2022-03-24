import { magic } from 'libs/magic-client';

export const loginWithMagic = async email => {
  try {
    const didToken = await magic.auth.loginWithMagicLink({
      email,
    });
    if (didToken) return true;

    return false;
  } catch (error) {
    console.error('Something went wrong logging in', error);
    return false;
  }
};
