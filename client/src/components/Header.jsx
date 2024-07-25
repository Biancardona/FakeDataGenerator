import React from 'react';

const Header = () => {
  return (
    <header className='py-10 bg-purple-950'>
      <div className='container mxauto flex-col lg:flex-row justify-between items-center'>
        <h1 className='font-bold text-2xl text-indigo-200 text-center'>
          Fake Random Data <spam className='text-white'> Generator </spam>
        </h1>
      </div>
    </header>
  );
};

export default Header;
