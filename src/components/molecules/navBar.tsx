import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Icon } from 'components/atom/icon';
import { Button } from 'components/atom/button';
import { useOnClickOutside } from 'libs/hook/handleClickOutside';
import { useSignOut } from 'libs/hook/handleSignOutUser';
import { mapModifiers } from 'libs/component';
export interface navbarProps {
  userName?: string;
}

const NavBar: React.FC<navbarProps> = ({ userName }) => {
  const router = useRouter();
  const { signOut } = useSignOut();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const componentClassName = mapModifiers('m-navbar', router.pathname === '/login' ? 'login' : 'dashboard');
  const className = `${componentClassName}`.trim();

  useEffect(() => {
    const handleComplete = () => {
      setShowDropdown(false);
    };

    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router.events]);

  const handleRoute = (url: string) => {
    router.push(url);
  };

  useOnClickOutside(buttonRef, () => setShowDropdown(false));
  if (router.pathname === '/video/[videoId]') return null;

  return (
    <div className={className}>
      <div className="m-navbar__Left">
        <div className="m-navbar__Left--logo">
          <Image src="/static/icons/netflix.svg" alt="Netflix logo" width="128px" height="34px" />
        </div>
        {router.pathname === '/login' || (
          <ul className="m-navbar__Left--items">
            <li className="m-navbar__Left--items-home" onClick={() => handleRoute('/')}>
              Home
            </li>
            {/* <li className="m-navbar__Left--items-myList" onClick={() => handleRoute('/')}>
              My List
            </li> */}
          </ul>
        )}
      </div>

      <nav className="m-navbar__Right">
        {userName && router.pathname !== '/login' && (
          <>
            <Button modifiers="text" onClick={() => setShowDropdown(!showDropdown)} ref={buttonRef}>
              <span>{userName}</span>
              <Icon name={showDropdown ? 'expand-less' : 'expand-more'} />
            </Button>
            {showDropdown && (
              <div className="m-navbar__Right--dropdown">
                <a onClick={(e: any) => signOut(e)} className="m-navbar__Right--dropdown-signout">
                  Sign out
                </a>
              </div>
            )}
          </>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
