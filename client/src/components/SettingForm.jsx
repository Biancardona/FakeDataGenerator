const SettingForm = ({
  region,
  handleRegionChange,
  errors,
  handleErrorsInputChange,
  seed,
  handleSeedChange,
  handleRandomSeed,
  totalRecords,
  handleTotalRecordsChange,
}) => {
  const convertErrorsToInputRange = (errors) => {
    return (errors / 10) * 1000;
  };

  const convertErrorsToSliderRange = (sliderValue) => {
    return (sliderValue / 1000) * 10;
  };

  const handleNumberInputChange = (e) => {
    const inputValue = parseFloat(e.target.value);
    handleErrorsInputChange(inputValue);
  };

  const handleSliderChange = (e) => {
    const sliderValue = parseFloat(e.target.value);
    handleErrorsInputChange(convertErrorsToInputRange(sliderValue));
  };

  return (
    <div className='bg-white rounded-lg shadow-md p-6 space-y-4'>
      <h3 className='text-lg font-bold text-purple-900 mb-4 flex items-center gap-2'>
        ⚙️ Configuración de Generación
      </h3>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {/* Región */}
        <div className='flex flex-col'>
          <label className='text-sm font-semibold text-gray-700 mb-2'>
            🌍 Región:
          </label>
          <select
            value={region}
            onChange={handleRegionChange}
            className='border-2 border-purple-200 rounded-lg px-3 py-2 focus:border-purple-500 focus:outline-none transition-colors'
          >
            <option value='Poland'>🇵🇱 Polonia</option>
            <option value='USA'>🇺🇸 Estados Unidos</option>
            <option value='Germany'>🇩🇪 Alemania</option>
          </select>
        </div>

        {/* Total de registros */}
        <div className='flex flex-col'>
          <label className='text-sm font-semibold text-gray-700 mb-2'>
            📊 Total de registros:
          </label>
          <input
            type='number'
            value={totalRecords}
            onChange={handleTotalRecordsChange}
            className='border-2 border-purple-200 rounded-lg px-3 py-2 focus:border-purple-500 focus:outline-none transition-colors'
            min={20}
            max={1000}
            step={20}
          />
          <span className='text-xs text-gray-500 mt-1'>
            Mínimo: 20, Máximo: 1000
          </span>
        </div>

        {/* Seed */}
        <div className='flex flex-col'>
          <label className='text-sm font-semibold text-gray-700 mb-2'>
            🎲 Semilla (Seed):
          </label>
          <div className='flex gap-2'>
            <input
              type='number'
              value={seed}
              onChange={handleSeedChange}
              className='flex-1 border-2 border-purple-200 rounded-lg px-3 py-2 focus:border-purple-500 focus:outline-none transition-colors'
            />
            <button
              onClick={handleRandomSeed}
              className='bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg'
              title='Generar semilla aleatoria'
            >
              🔄
            </button>
          </div>
        </div>
      </div>

      {/* Control de errores - Línea completa */}
      <div className='flex flex-col'>
        <label className='text-sm font-semibold text-gray-700 mb-2'>
          ⚠️ Nivel de Errores:
        </label>
        <div className='flex items-center gap-4'>
          <input
            type='range'
            value={convertErrorsToSliderRange(errors)}
            onChange={handleSliderChange}
            className='flex-1 h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer slider-thumb'
            min={0}
            max={10}
            step={0.1}
          />
          <input
            type='number'
            value={errors}
            onChange={handleNumberInputChange}
            className='w-24 border-2 border-purple-200 rounded-lg px-3 py-2 focus:border-purple-500 focus:outline-none transition-colors'
            min={0}
            max={1000}
            step={0.1}
          />
        </div>
        <div className='flex justify-between text-xs text-gray-500 mt-1'>
          <span>Sin errores (0)</span>
          <span>Ruido total (1000)</span>
        </div>
      </div>

      {/* Información adicional */}
      <div className='bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-4 mt-4'>
        <p className='text-sm text-gray-700'>
          💡 <strong>Tip:</strong> Los datos se generan con la configuración actual. 
          Cambia cualquier parámetro para regenerar todos los datos automáticamente.
        </p>
      </div>
    </div>
  );
};

export default SettingForm;