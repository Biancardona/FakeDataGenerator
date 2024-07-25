const SettingForm = ({
  region,
  handleRegionChange,
  errors,
  handleErrorsInputChange,
  seed,
  handleSeedChange,
  handleRandomSeed,
}) => {
  const convertErrorsToInputRange = (errors) => {
    return (errors / 10) * 1000;
  };

  // Convert errors from input range (0-1000) to slider range (0-10)
  const convertErrorsToSliderRange = (sliderValue) => {
    return (sliderValue / 1000) * 10;
  };

  // Handle number input change
  const handleNumberInputChange = (e) => {
    const inputValue = parseFloat(e.target.value);
    handleErrorsInputChange(inputValue);
  };

  // Handle slider change
  const handleSliderChange = (e) => {
    const sliderValue = parseFloat(e.target.value);
    handleErrorsInputChange(convertErrorsToInputRange(sliderValue));
  };
  return (
    <div className='w-full mb-4 flex flex-wrap justify-between items-center'>
      <div className='w-full items-center flex flex-wrap space-x-4'>
        <div className='flex items-center'>
          <label className='mr-2'>Region:</label>
          <select
            value={region}
            onChange={handleRegionChange}
            className='mr-4 border border-gray-300 rounded px-2 py-1 w-full md:w-auto'
          >
            <option value='Poland'>Poland</option>
            <option value='USA'>USA</option>
            <option value='Germany'>Germany</option>
          </select>
          <div className='flex items-center'>
            <label className='mr-2'>Errors:</label>
            <input
              type='range'
              value={convertErrorsToSliderRange(errors)}
              onChange={handleSliderChange}
              className='ml-4'
              min={0}
              max={10}
              step={0.1}
            />
            <input
              type='number'
              value={errors}
              onChange={handleNumberInputChange}
              className='border border-gray-300 rounded px-2 py-1 w-20'
              min={0}
              max={1000}
              step={0.1}
            />
          </div>

          <label className='mr-2'>Seed:</label>
          <input
            type='number'
            value={seed}
            onChange={handleSeedChange}
            className='mr-4 border border-gray-300 rounded px-2 py-1 w-full md:w-auto'
          />

          <button
            onClick={handleRandomSeed}
            className='bg-gray-200 px-4 py-2 rounded flex items-center justify-center ml-2'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='w-5 h-5'
            >
              <polyline points='23 4 23 10 17 10'></polyline>
              <polyline points='1 20 1 14 7 14'></polyline>
              <line x1='20' y1='4' x2='23' y2='4'></line>
              <line x1='1' y1='20' x2='4' y2='20'></line>
              <line x1='23' y1='10' x2='17' y2='4'></line>
              <line x1='7' y1='20' x2='1' y2='14'></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingForm;
