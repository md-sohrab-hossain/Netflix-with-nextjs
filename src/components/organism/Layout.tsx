import Head from 'next/head';
import NavBar from 'components/molecules/navBar';
import { Scrollbar } from 'react-scrollbars-custom';
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
      <Scrollbar
        style={{ height: '100vh' }}
        trackYProps={{ className: 'o-layout__tracky' }}
        thumbYProps={{ className: 'o-layout__thumby' }}
      >
        {children}
      </Scrollbar>
    </div>
  );
};

export default Layout;
