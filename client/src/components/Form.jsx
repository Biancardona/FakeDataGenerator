import React, { useState, useEffect } from 'react';
import SettingForm from './SettingForm';
import DataTable from './DataTable';
import Pagination from './Pagination';
import { generateRandomData } from '../config/generateRandomData';

const Form = () => {
  const [allData, setAllData] = useState([]); // Todos los datos generados
  const [displayData, setDisplayData] = useState([]); // Datos a mostrar en página actual
  const [region, setRegion] = useState('Poland');
  const [errors, setErrors] = useState(0);
  const [seed, setSeed] = useState(2348234);
  const [page, setPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(100); // Total de registros a generar
  const itemsPerPage = 20;

  // Generar todos los datos cuando cambian los parámetros
  useEffect(() => {
    const generatedData = [];
    for (let i = 0; i < totalRecords; i++) {
      generatedData.push(generateRandomData(region, seed + i, errors));
    }
    setAllData(generatedData);
    setPage(1); // Reset a primera página
  }, [region, seed, errors, totalRecords]);

  // Actualizar datos mostrados cuando cambia la página
  useEffect(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayData(allData.slice(startIndex, endIndex));
  }, [page, allData]);

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  const handleErrorsInputChange = (value) => {
    setErrors(parseInt(value));
  };

  const handleSeedChange = (event) => {
    setSeed(Number(event.target.value));
  };

  const handleRandomSeed = () => {
    const randomSeed = Math.floor(Math.random() * 1000000);
    setSeed(randomSeed);
  };

  const handleTotalRecordsChange = (event) => {
    const value = parseInt(event.target.value);
    setTotalRecords(Math.max(20, Math.min(value, 1000))); // Entre 20 y 1000
  };

  const totalPages = Math.ceil(allData.length / itemsPerPage);

  return (
    <div className='space-y-6'>
      <SettingForm
        region={region}
        handleRegionChange={handleRegionChange}
        errors={errors}
        handleErrorsInputChange={handleErrorsInputChange}
        seed={seed}
        handleSeedChange={handleSeedChange}
        handleRandomSeed={handleRandomSeed}
        totalRecords={totalRecords}
        handleTotalRecordsChange={handleTotalRecordsChange}
      />
      
      {/* Información de registros */}
      <div className='bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg p-4 flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <div className='bg-white rounded-lg px-4 py-2 shadow-sm'>
            <span className='text-sm text-gray-600'>Total de registros:</span>
            <span className='ml-2 font-bold text-purple-600 text-lg'>{allData.length}</span>
          </div>
          <div className='bg-white rounded-lg px-4 py-2 shadow-sm'>
            <span className='text-sm text-gray-600'>Página actual:</span>
            <span className='ml-2 font-bold text-indigo-600 text-lg'>{page} / {totalPages}</span>
          </div>
        </div>
        <div className='text-sm text-gray-600'>
          Mostrando {(page - 1) * itemsPerPage + 1} - {Math.min(page * itemsPerPage, allData.length)} registros
        </div>
      </div>
      
      <DataTable data={displayData} />
      
      {allData.length > 0 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}
    </div>
  );
};

export default Form;