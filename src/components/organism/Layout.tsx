import Head from 'next/head';
import NavBar from 'components/molecules/navBar';

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
      {children}
    </div>
  );
};

export default Layout;
