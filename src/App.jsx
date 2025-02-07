import { useState } from 'react';
import General from './components/General.jsx';
import Practical from './components/Practical.jsx';
import Education from './components/Education.jsx';
import Navbar from './components/Navbar.jsx';
import GeneratePDF from './components/GeneratePDF.jsx';
import './styles/app.css';

export default function App() {
  const [personalDetails, setPersonalDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNum: '',
    address: '',
    occupation: '',
    linkedin: '',
    portfolio: '',
    about: '',
  });

  const [jobExperience, setJobExperience] = useState({
    company_name: '',
    job_title: '',
    start_date: '',
    end_date: '',
    job_location: '',
    job_duties: '',
  });

  return (
    <div className='parent-container'>
      <div className='input-container'>
        <Navbar />
        <General
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
        />
        <Practical
          jobExperience={jobExperience}
          setJobExperience={setJobExperience}
        />
        <Education />
      </div>
      <div className='form-container'>
        <GeneratePDF
          personalDetails={personalDetails}
          jobExperience={jobExperience}
        />
      </div>
    </div>
  );
}
