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

  const [jobExperience, setJobExperience] = useState([
    {
      job_title: 'Software Developer',
      company_name: 'Google',
      start_date: '10/10/2020',
      end_date: '7/1/2024',
      job_location: 'San Jose, California',
      job_duties: 'Code',
    },
  ]);

  const [educationExperience, setEducationExperience] = useState([
    {
      school_name: 'University of California, Irvine',
      degree: 'Bsc. Computer Science',
      start_date: '10/10/2020',
      end_date: '12/01/25',
      school_location: 'Irvine, CA',
      school_description: 'Honors, Relevant Coursework, GPA',
    },
  ]);

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
        <Education
          educationExperience={educationExperience}
          setEducationExperience={setEducationExperience}
        />
      </div>
      <div className='form-container'>
        <GeneratePDF
          personalDetails={personalDetails}
          jobExperience={jobExperience}
          educationExperience={educationExperience}
        />
      </div>
    </div>
  );
}
