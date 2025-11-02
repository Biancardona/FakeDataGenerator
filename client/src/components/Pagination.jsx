import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Mostrar todas las páginas si son pocas
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Lógica para mostrar páginas con ...
      const startPage = Math.max(1, currentPage - 2);
      const endPage = Math.min(totalPages, currentPage + 2);
      
      if (startPage > 1) {
        pages.push(1);
        if (startPage > 2) pages.push('...');
      }
      
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      
      if (endPage < totalPages) {
        if (endPage < totalPages - 1) pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePageClick = (page) => {
    if (page !== '...') {
      onPageChange(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleFirst = () => {
    onPageChange(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLast = () => {
    onPageChange(totalPages);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='flex flex-col items-center gap-4 mt-6'>
      <div className='flex items-center justify-center gap-2 flex-wrap'>
        {/* Botón Primera Página */}
        <button
          onClick={handleFirst}
          disabled={currentPage === 1}
          className={`px-3 py-2 rounded-lg font-medium transition-all ${
            currentPage === 1
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-white text-purple-600 hover:bg-purple-100 border-2 border-purple-200'
          }`}
          title="Primera página"
        >
          ⟨⟨
        </button>

        {/* Botón Anterior */}
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            currentPage === 1
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-white text-purple-600 hover:bg-purple-100 border-2 border-purple-200'
          }`}
        >
          ← Anterior
        </button>

        {/* Números de página */}
        <div className='flex items-center gap-2'>
          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(page)}
              disabled={page === '...'}
              className={`min-w-[40px] h-10 rounded-lg font-medium transition-all ${
                page === currentPage
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg scale-110'
                  : page === '...'
                  ? 'bg-transparent text-gray-400 cursor-default'
                  : 'bg-white text-gray-700 hover:bg-purple-50 border-2 border-gray-200 hover:border-purple-300'
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Botón Siguiente */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            currentPage === totalPages
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-white text-purple-600 hover:bg-purple-100 border-2 border-purple-200'
          }`}
        >
          Siguiente →
        </button>

        {/* Botón Última Página */}
        <button
          onClick={handleLast}
          disabled={currentPage === totalPages}
          className={`px-3 py-2 rounded-lg font-medium transition-all ${
            currentPage === totalPages
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-white text-purple-600 hover:bg-purple-100 border-2 border-purple-200'
          }`}
          title="Última página"
        >
          ⟩⟩
        </button>
      </div>

      {/* Información de navegación */}
      <div className='text-sm text-gray-600 bg-white px-4 py-2 rounded-lg shadow-sm'>
        Página <span className='font-bold text-purple-600'>{currentPage}</span> de{' '}
        <span className='font-bold text-indigo-600'>{totalPages}</span>
      </div>
    </div>
  );
};

export default Pagination;