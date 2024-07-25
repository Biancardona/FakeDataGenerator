import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main className='container mx-auto md:grid mt-12 gap-10 p-5 items-center'>
        {' '}
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
