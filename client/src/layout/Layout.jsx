import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    // Contenedor principal con imagen de fondo
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 bg-fixed relative">
      {/* Imagen de fondo con overlay */}
      <div 
        className="fixed inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Contenedor principal */}
      <div className="relative flex flex-col min-h-screen">
        {/* Header */}
        <Header />
        
        {/* Body/Main content */}
        <main className='flex-grow container mx-auto px-5 py-8'>
          <Outlet />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;