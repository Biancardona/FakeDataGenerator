import React from 'react';

const Header = () => {
  return (
    <header className='py-6 bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 shadow-lg'>
      <div className='container mx-auto px-5'>
        <div className='flex items-center justify-between'>
          {/* Logo del lado izquierdo */}
          <div className='flex items-center space-x-4'>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/2103/2103633.png" 
              alt="Logo Fake Data Generator" 
              className='h-12 w-12 md:h-16 md:w-16 filter drop-shadow-lg'
            />
            <div>
              <h1 className='font-bold text-xl md:text-3xl text-indigo-200'>
                Fake Random Data 
                <span className='text-white block md:inline md:ml-2'>Generator</span>
              </h1>
              <p className='text-purple-300 text-xs md:text-sm mt-1'>
                Generador de datos aleatorios con errores configurables
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;