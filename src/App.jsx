import General from './components/General.jsx';
import Practical from './components/Practical.jsx';
import Education from './components/Education.jsx';
import Navbar from './components/Navbar.jsx';
import GeneratePDF from './components/GeneratePDF.jsx';
import './styles/app.css';

export default function App() {
  return (
    <div className='parent-container'>
      <div className='input-container'>
        <Navbar />
        <General />
        <Practical />
        <Education />
      </div>
      <div className='form-container'>
        <GeneratePDF />
      </div>
    </div>
  );
}
