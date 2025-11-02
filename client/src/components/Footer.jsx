import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white py-8 mt-auto'>
      <div className='container mx-auto px-5'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {/* Columna 1: Información del Curso */}
          <div>
            <h3 className='font-bold text-lg mb-3 text-indigo-200'>
              📚 Información Académica
            </h3>
            <p className='text-purple-200 text-sm mb-2'>
              <strong>Curso:</strong> Conceptualización de servicios en la nube
            </p>
            <p className='text-purple-200 text-sm mb-2'>
              <strong>Unidad:</strong>  3 Desarrollo de aplicaciones web en los servicios de la nube
            </p>
            <p className='text-purple-200 text-sm'>
              <strong>Institución:</strong> Universidad de Guadalajara
            </p>
          </div>
          
          {/* Columna 2: Datos del Estudiante */}
          <div>
            <h3 className='font-bold text-lg mb-3 text-indigo-200'>
              👤 Información del Estudiante
            </h3>
            <p className='text-purple-200 text-sm mb-2'>
              <strong>Nombre:</strong> Bianca Esmeralda Cardona Rivera
            </p>
            <p className='text-purple-200 text-sm mb-2'>
              <strong>Código:</strong> 300179558
            </p>
            <p className='text-purple-200 text-sm'>
              <strong>Email:</strong>{' '}
              <a 
                href="mailto:biancardona.rivera@gmail.com" 
                className='underline hover:text-white transition-colors'
              >
                biancardona.rivera@gmail.com
              </a>
            </p>
          </div>
          
          {/* Columna 3: Información Adicional */}
          <div>
            <h3 className='font-bold text-lg mb-3 text-indigo-200'>
              🎓 Proyecto Académico
            </h3>
            <p className='text-purple-200 text-sm mb-3'>
              3.2. Sitio Web sencillo
            </p>
            <p className='text-purple-200 text-sm'>
              <strong>Asesor:</strong> Miguel Garate Kelly
            </p>
          </div>
        </div>
        
        {/* Línea divisoria */}
        <div className='border-t border-purple-700 mt-6 pt-4'>
          <div className='flex flex-col md:flex-row justify-between items-center text-sm text-purple-300'>
            <p>© 2025 Fake Data Generator - Todos los derechos reservados</p>
            <p className='mt-2 md:mt-0'>
              Desarrollado con React, PHP, MySQL y ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;