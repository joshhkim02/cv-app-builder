import General from './components/General.jsx';
import Practical from './components/Practical.jsx';
import Education from './components/Education.jsx';
import Navbar from './components/Navbar.jsx';

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
        <h1>Resume Here</h1>
      </div>
    </div>
  );
}
