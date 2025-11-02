import Form from '../components/Form';
import VideoSection from '../components/VideoSection';

const Home = () => {
  return (
    <div className='space-y-8'>
      {/* Sección de video explicativo */}
      <VideoSection />
      
      {/* Formulario de generación de datos */}
      <div className='bg-white rounded-xl shadow-lg p-6'>
        <Form />
      </div>
    </div>
  );
};

export default Home;