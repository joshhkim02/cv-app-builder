// Practical.jsx
import { useState } from 'react';
import styles from '../styles/practical.module.css';
import InputField from './InputField.jsx';

function JobExperienceForm({ jobExperience, setJobExperience }) {
  const handleChange = (e) => {
    const { id, value } = e.target;
    setJobExperience((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('submitted');
  };

  const handleCancel = (e) => {
    e.preventDefault();
    alert('cancelled');
  };

  return (
    <div>
      <form className={styles.job_experience_form}>
        <InputField
          className={`${styles.input_label} ${styles.role}`}
          type='text'
          id='job_title'
          text='Job Title'
          defaultV='Software Developer'
          value={jobExperience.job_title}
          onChange={handleChange}
        />
        <InputField
          className={`${styles.input_label} ${styles.company}`}
          type='text'
          id='company_name'
          text='Company'
          defaultV='Google'
          value={jobExperience.company_name}
          onChange={handleChange}
        />
        <InputField
          className={`${styles.input_label} ${styles.start}`}
          type='text'
          id='start_date'
          text='Start Date'
          defaultV='10/10/2020'
          value={jobExperience.start_date}
          onChange={handleChange}
        />
        <InputField
          className={`${styles.input_label} ${styles.end}`}
          type='text'
          id='end_date'
          text='End Date'
          defaultV='7/1/2024'
          value={jobExperience.end_date}
          onChange={handleChange}
        />
        <InputField
          className={`${styles.input_label} ${styles.location}`}
          type='text'
          id='job_location'
          text='Location'
          defaultV='San Jose, California'
          value={jobExperience.job_location}
          onChange={handleChange}
        />
        <InputField
          className={`${styles.input_label} ${styles.description}`}
          type='textarea'
          id='job_duties'
          text='Description'
          defaultV='Ex: Design, develop, and maintain scalable software applications following best practices.
Collaborate with product managers, designers, and other engineers to understand requirements and translate them into technical solutions.
Write clean, efficient, and well-documented code.'
          value={jobExperience.job_duties}
          onChange={handleChange}
        />
        <div className={styles.buttonContainer}>
          <button
            type='submit'
            className={styles.submitButton}
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            type='button'
            className={styles.cancelButton}
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export function JobExperienceDiv({ jobExperience, setShowElement }) {
  const handleVisibility = () => {
    setShowElement((visible) => !visible);
  };
  return (
    <div className={styles.job_div_container}>
      <div className={styles.job_holder_container}>
        <p className={styles.job_experience_p}>
          {jobExperience.job_title} at {''}
          {jobExperience.company_name}
        </p>
        <p>
          {jobExperience.start_date} - {jobExperience.end_date}
        </p>
      </div>
      <div className={styles.edit_img_container}>
        <img
          className='edit_experience_img'
          src='src/assets/edit_img.png'
          alt='Edit history button'
          height='40'
          width='40'
          onClick={handleVisibility}
        />
      </div>
    </div>
  );
}

export default function Practical({ jobExperience, setJobExperience }) {
  const [showElement, setShowElement] = useState(true);

  return (
    <>
      <h1 className={styles.h1}>
        Employment History
        <div className={styles.div_line}></div>
        {showElement && (
          <JobExperienceForm
            jobExperience={jobExperience}
            setJobExperience={setJobExperience}
          />
        )}
        <JobExperienceDiv
          jobExperience={jobExperience}
          setShowElement={setShowElement}
        />
      </h1>
    </>
  );
}
