const DataTable = ({ data }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full bg-white border border-gray-200 rounded-xl shadow-md'>
        <thead>
          <tr>
            <th className='py-2 px-4 bg-gray-100 border-b text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>
              Index
            </th>
            <th className='py-2 px-4 bg-gray-100 border-b text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>
              Random identifier
            </th>
            <th className='py-2 px-4 bg-gray-100 border-b text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>
              Name
            </th>
            <th className='py-2 px-4 bg-gray-100 border-b text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>
              Address
            </th>
            <th className='py-2 px-4 bg-gray-100 border-b text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>
              Phone
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className='py-2 px-4 border-b'>{index + 1}</td>
              <td className='py-2 px-4 border-b'>{item.identifier}</td>
              <td className='py-2 px-4 border-b'>{item.name}</td>
              <td className='py-2 px-4 border-b'>{item.address}</td>
              <td className='py-2 px-4 border-b'>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
