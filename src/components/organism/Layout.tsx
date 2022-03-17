import Head from 'next/head';
import NavBar from 'components/molecules/navBar';
import { Scrollbar } from 'react-scrollbars-custom';
export interface layoutProps {
  children?: React.ReactNode;
  title?: string;
}
const Layout: React.FC<layoutProps> = ({ children, title = 'Netflix' }) => {
  return (
    <div className="o-layout">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
      </Head>
      <NavBar userName="sajal@gmail.com" />
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
