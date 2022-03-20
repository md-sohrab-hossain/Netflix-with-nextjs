import { useState, useEffect, useRef } from 'react';
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
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  useEffect(() => {
    const element = document.querySelector('.m-navbar') as HTMLElement;
    if (router.pathname === '/login') {
      element.style.marginTop = '2rem';
      element.style.background = 'transparent';
    } else {
      element.style.marginTop = '0';
      element.style.background = `linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0, rgba(202, 173, 173, 0.2) 58%)`;
    }
  }, [router.pathname]);

  const handleClick = (url: string) => {
    router.push(url);
  };

  useOnClickOutside(buttonRef, () => setShowDropdown(false));

  return (
    <div className="m-navbar">
      <div className="m-navbar__Left">
        <div className="m-navbar__Left--logo">
          <Link href="/">
            <a>
              <Image src="/static/icons/netflix.svg" alt="Netflix logo" width="128px" height="34px" />
            </a>
          </Link>
        </div>
        {router.pathname === '/login' || (
          <ul className="m-navbar__Left--items">
            <li className="m-navbar__Left--items-home" onClick={() => handleClick('/')}>
              Home
            </li>
            <li className="m-navbar__Left--items-myList" onClick={() => handleClick('/browse/myList')}>
              My List
            </li>
          </ul>
        )}
      </div>

      <nav className="m-navbar__Right">
        {(userName && router.pathname === '/login') || (
          <>
            <Button modifiers="text" onClick={() => setShowDropdown(!showDropdown)} ref={buttonRef}>
              <span>{userName}</span>
              <Icon name={showDropdown ? 'expand-less' : 'expand-more'} />
            </Button>
            {showDropdown && (
              <div className="m-navbar__Right--dropdown">
                <Link href="/login">
                  <a className="m-navbar__Right--dropdown-signout">Sign out</a>
                </Link>
              </div>
            )}
          </>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
