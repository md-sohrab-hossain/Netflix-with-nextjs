import { magic } from 'libs/magic-client';
import { useRouter } from 'next/router';

export const useSignOut = () => {
  const router = useRouter();

  const signOut = async (e: MouseEvent) => {
    e.preventDefault();

    try {
      await (magic as any).user.logout();
      router.push('/login');
    } catch {}
  };

  return { signOut };
};
