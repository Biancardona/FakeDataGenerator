import React, { useState, useEffect } from 'react';
import SettingForm from './SettingForm';
import DataTable from './DataTable';
import { generateRandomData } from '../config/generateRandomData';

const Form = () => {
  const [data, setData] = useState([]);
  const [region, setRegion] = useState('Poland');
  const [errors, setErrors] = useState(0);
  const [seed, setSeed] = useState(2348234);
  const [page, setPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    const initialData = [];
    for (let i = 0; i < itemsPerPage; i++) {
      initialData.push(generateRandomData(region, seed + i, errors));
    }
    setData(initialData);
  }, [region, seed, errors]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadMoredata();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [data]);

  const loadMoredata = () => {
    const newData = [];
    for (let i = 0; i < 10; i++) {
      newData.push(generateRandomData(region, seed + data.length + i, errors));
    }
    setData((prevData) => [...prevData, ...newData]);
    setPage((prevPage) => prevPage + 1);
  };

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
    setData([]);
    setPage(1);
  };

  const handleErrorsInputChange = (value) => {
    setErrors(parseInt(value));
  };

  const handleSeedChange = (event) => {
    setSeed(Number(event.target.value));
    setData([]);
    setPage(1);
  };

  const handleRandomSeed = () => {
    const randomSeed = Math.floor(Math.random() * 1000000);
    setSeed(randomSeed);
    setData([]);
    setPage(1);
  };

  return (
    <>
      <SettingForm
        region={region}
        handleRegionChange={handleRegionChange}
        errors={errors}
        handleErrorsInputChange={handleErrorsInputChange}
        seed={seed}
        handleSeedChange={handleSeedChange}
        handleRandomSeed={handleRandomSeed}
      />
      <DataTable data={data} />
    </>
  );
};

export default Form;
