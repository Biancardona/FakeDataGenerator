import React, { useState } from 'react';

const VideoSection = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(true);
  
  return (
    <div className='bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl shadow-lg p-6 border-2 border-purple-200'>
      <div className='flex items-center justify-between mb-4'>
        <div>
          <h2 className='text-2xl font-bold text-purple-900 flex items-center gap-2'>
            🎥 Video Tutorial
          </h2>
          <p className='text-purple-700 text-sm mt-1'>
            Aprende cómo usar el generador de datos falsos
          </p>
        </div>
        <button
          onClick={() => setIsVideoVisible(!isVideoVisible)}
          className='px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium'
        >
          {isVideoVisible ? '🔽 Ocultar' : '▶️ Mostrar'} Video
        </button>
      </div>
      
      {isVideoVisible && (
        <div className='relative w-full' style={{ paddingBottom: '56.25%' }}>
          {/* Video de YouTube sobre Faker.js y generación de datos */}
          <iframe
            className='absolute top-0 left-0 w-full h-full rounded-lg shadow-md'
            src='https://www.youtube.com/embed/WCyUkQ_x0MM?si=LUsKJd_W_Hl8QekF'
            title='Tutorial Faker.js - Generación de Datos Falsos'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          />
        </div>
      )}
      
      {!isVideoVisible && (
        <div className='bg-purple-50 border-2 border-dashed border-purple-300 rounded-lg p-8 text-center'>
          <div className='text-6xl mb-2'>📹</div>
          <p className='text-purple-600 font-medium'>
            Video oculto - Haz clic en "Mostrar Video" para visualizarlo
          </p>
        </div>
      )}
      
      <div className='mt-4 grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='bg-white p-4 rounded-lg shadow-sm'>
          <div className='text-2xl mb-2'>⚙️</div>
          <h3 className='font-semibold text-purple-900 mb-1'>Configuración</h3>
          <p className='text-sm text-gray-600'>
            Ajusta región, errores y semilla para generar datos personalizados
          </p>
        </div>
        <div className='bg-white p-4 rounded-lg shadow-sm'>
          <div className='text-2xl mb-2'>🌍</div>
          <h3 className='font-semibold text-purple-900 mb-1'>Multi-región</h3>
          <p className='text-sm text-gray-600'>
            Genera datos en formato de Polonia, USA o Alemania
          </p>
        </div>
        <div className='bg-white p-4 rounded-lg shadow-sm'>
          <div className='text-2xl mb-2'>🔢</div>
          <h3 className='font-semibold text-purple-900 mb-1'>Control de Errores</h3>
          <p className='text-sm text-gray-600'>
            Simula errores en datos para pruebas de validación
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;