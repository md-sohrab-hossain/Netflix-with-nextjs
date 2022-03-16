import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Icon } from 'components/atom/icon';
import { Button } from 'components/atom/button';
import { useOnClickOutside } from 'libs/hook/handleClickOutside';
export interface navbarProps {
  userName?: string;
}

const NavBar: React.FC<navbarProps> = ({ userName }) => {
  const router = useRouter();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isSignOut, setIsSignOut] = useState<boolean>(false);

  const handleClick = (url: string) => {
    router.push(url);
  };

  useOnClickOutside(buttonRef, () => setIsSignOut(false));

  return (
    <div className="m-navbar">
      <div className="m-navbar__Left">
        <div className="m-navbar__Left--logo">
          <Image src="/static/images/netflix.svg" alt="Netflix logo" width="128px" height="34px" />
        </div>
        <ul className="m-navbar__Left--items">
          <li className="m-navbar__Left--items-home" onClick={() => handleClick('/')}>
            Home
          </li>
          <li className="m-navbar__Left--items-myList" onClick={() => handleClick('/browse/myList')}>
            My List
          </li>
        </ul>
      </div>

      <nav className="m-navbar__Right">
        {userName ? (
          <>
            <Button modifiers="text" onClick={() => setIsSignOut(!isSignOut)} ref={buttonRef}>
              <span>{userName}</span>
              <Icon name={isSignOut ? 'expand-less' : 'expand-more'} />
            </Button>
            {isSignOut && (
              <div className="m-navbar__Right--dropdown">
                <Link href="/login">
                  <a className="m-navbar__Right--dropdown-signout">Sign out</a>
                </Link>
              </div>
            )}
          </>
        ) : (
          <Button modifiers="secondary" onClick={() => handleClick('/login')}>
            <span>Login</span>
          </Button>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
