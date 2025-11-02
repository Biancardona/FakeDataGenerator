const DataTable = ({ data }) => {
  return (
    <div className='overflow-x-auto rounded-lg shadow-md'>
      <table className='min-w-full bg-white border-collapse'>
        <thead>
          <tr className='bg-gradient-to-r from-purple-600 to-indigo-600 text-white'>
            <th className='py-3 px-4 border-b text-left text-xs font-bold uppercase tracking-wider'>
              #
            </th>
            <th className='py-3 px-4 border-b text-left text-xs font-bold uppercase tracking-wider'>
              🔑 Identificador
            </th>
            <th className='py-3 px-4 border-b text-left text-xs font-bold uppercase tracking-wider'>
              👤 Nombre
            </th>
            <th className='py-3 px-4 border-b text-left text-xs font-bold uppercase tracking-wider'>
              📍 Dirección
            </th>
            <th className='py-3 px-4 border-b text-left text-xs font-bold uppercase tracking-wider'>
              📞 Teléfono
            </th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="5" className='py-8 px-4 text-center text-gray-500'>
                <div className='flex flex-col items-center justify-center'>
                  <div className='text-6xl mb-4'>📊</div>
                  <p className='font-semibold'>No hay datos generados</p>
                  <p className='text-sm mt-2'>Configura los parámetros y espera la generación automática</p>
                </div>
              </td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr 
                key={index} 
                className='hover:bg-purple-50 transition-colors border-b border-gray-200'
              >
                <td className='py-3 px-4 text-sm font-medium text-gray-900'>
                  {index + 1}
                </td>
                <td className='py-3 px-4 text-sm text-gray-700 font-mono text-xs'>
                  {item.identifier}
                </td>
                <td className='py-3 px-4 text-sm text-gray-900 font-medium'>
                  {item.name}
                </td>
                <td className='py-3 px-4 text-sm text-gray-600'>
                  {item.address}
                </td>
                <td className='py-3 px-4 text-sm text-gray-600'>
                  {item.phone}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;