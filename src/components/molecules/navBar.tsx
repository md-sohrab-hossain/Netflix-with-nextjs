import Button from 'components/atom/button';
import Image from 'next/image';

export interface navbarProps {
  userName: string;
}

const NavBar: React.FC<navbarProps> = ({ userName }) => {
  return (
    <div className="m-navbar">
      <div className="m-navbar__Left">
        <div className="m-navbar__Left--logo">
          <Image src="/static/images/netflix.svg" alt="Netflix logo" width="128px" height="34px" />
        </div>
        <ul className="m-navbar__Left--items">
          <li className="m-navbar__Left--items-home">Home</li>
          <li className="m-navbar__Left--items-myList">My List</li>
        </ul>
      </div>

      <nav className="m-navbar__Right">
        <Button modifiers="text" title={userName}></Button>
        <div className="m-navbar__Right--dropdown">
          <a>Sign out</a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
