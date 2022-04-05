import Head from 'next/head';
import NavBar from 'components/molecules/navBar';
import { useUserInfo } from 'libs/hook/handleUserInfo';
export interface layoutProps {
  children?: React.ReactNode;
  title?: string;
}

const Layout: React.FC<layoutProps> = ({ children, title = 'Netflix' }) => {
  const { userEmail } = useUserInfo();

  return (
    <div className="o-layout">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
      </Head>
      <NavBar userName={userEmail} />
      {children}
    </div>
  );
};

export default Layout;
