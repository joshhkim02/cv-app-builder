// Practical.jsx
import { useState } from 'react';
import styles from '../styles/practical.module.css';
import InputField from './InputField.jsx';

function JobExperienceForm({
  jobExperience,
  updateJobExperience,
  handleSubmit,
  handleCancel,
  handleDelete,
}) {
  const handleChange = (e) => {
    const { id, value } = e.target;
    updateJobExperience({ [id]: value });
  };

  return (
    <div>
      <form className={styles.job_experience_form} onSubmit={handleSubmit}>
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
          <div className={styles.deleteContainer}>
            <button
              type='button'
              className={styles.deleteButton}
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
          <div className={styles.otherButtonContainer}>
            <button type='submit' className={styles.submitButton}>
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
        </div>
      </form>
    </div>
  );
}

export function JobExperienceDiv({ jobExperience, handleEdit }) {
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
          onClick={handleEdit}
        />
      </div>
    </div>
  );
}

export default function Practical({ jobExperience, setJobExperience }) {
  const [editIndex, setEditIndex] = useState(null);

  const [tempJob, setTempJob] = useState({});

  const handleEdit = (index) => {
    setEditIndex(index);
    setTempJob({ ...jobExperience[index] });
  };

  const updateTempJob = (updatedFields) => {
    setTempJob((prev) => ({ ...prev, ...updatedFields }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setJobExperience((prev) => {
      const newExperience = [...prev];
      newExperience[editIndex] = { ...tempJob };
      return newExperience;
    });
    setEditIndex(null);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    const isEmpty = Object.values(tempJob).every(
      (value) => value.trim() === ''
    );

    if (isEmpty && editIndex !== null) {
      setJobExperience((prev) =>
        prev.filter((_, index) => index !== editIndex)
      );
    }
    setEditIndex(null);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      setJobExperience((prev) =>
        prev.filter((_, index) => index !== editIndex)
      );
    }
    setEditIndex(null);
  };

  const handleAddEmployment = () => {
    const newJob = {
      job_title: '',
      company_name: '',
      start_date: '',
      end_date: '',
      job_location: '',
      job_duties: '',
    };
    setJobExperience((prev) => [...prev, newJob]);
    setEditIndex(jobExperience.length);
    setTempJob(newJob);
  };

  return (
    <>
      <h1 className={styles.h1}>
        Employment History
        <div className={styles.div_line}></div>
        {jobExperience.map((job, index) => (
          <div key={index}>
            {editIndex === index ? (
              <JobExperienceForm
                jobExperience={tempJob}
                updateJobExperience={updateTempJob}
                handleSubmit={handleSubmit}
                handleCancel={handleCancel}
                handleDelete={handleDelete}
              />
            ) : (
              <JobExperienceDiv
                jobExperience={job}
                handleEdit={() => handleEdit(index)}
              />
            )}
          </div>
        ))}
        <div className={styles.addContainer}>
          <button
            className={styles.add_employment_btn}
            onClick={handleAddEmployment}
          >
            + Add Employment
          </button>
        </div>
      </h1>
    </>
  );
}
