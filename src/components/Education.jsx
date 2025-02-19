import { useState } from 'react';
import styles from '../styles/education.module.css';
import InputField from './InputField.jsx';

function EducationExperienceForm({
  educationExperience,
  updateEducationExperience,
  handleSubmit,
  handleCancel,
  handleDelete,
}) {
  const handleChange = (e) => {
    const { id, value } = e.target;
    updateEducationExperience({ [id]: value });
  };

  return (
    <form className={styles.edu_experience_form} onSubmit={handleSubmit}>
      <InputField
        className={styles.input_label + ' ' + styles.role}
        type='text'
        id='degree_name'
        text='Degree'
        defaultV='Bsc. Computer Engineering'
        value={educationExperience.degree_name}
        onChange={handleChange}
      />
      <InputField
        className={styles.input_label + ' ' + styles.company}
        type='text'
        id='school_name'
        text='School'
        defaultV='University of California, Irvine'
        value={educationExperience.school_name}
        onChange={handleChange}
      />
      <InputField
        className={styles.input_label + ' ' + styles.start}
        type='text'
        id='start_date'
        text='Start Date'
        defaultV='10/10/20'
        value={educationExperience.start_date}
        onChange={handleChange}
      />
      <InputField
        className={styles.input_label + ' ' + styles.end}
        type='text'
        id='end_date'
        text='End Date'
        defaultV='12/01/25'
        value={educationExperience.end_date}
        onChange={handleChange}
      />
      <InputField
        className={styles.input_label + ' ' + styles.location}
        type='text'
        id='school_location'
        text='Location'
        defaultV='Irvine, CA'
        value={educationExperience.school_location}
        onChange={handleChange}
      />
      <InputField
        className={styles.input_label + ' ' + styles.description}
        type='textarea'
        id='school_description'
        text='Description'
        defaultV='E.g.:
Honors: Magna Cum Laude (GPA: 3.76), Presidents List (2021-2022), Dean’s List (2020-2024)
Relevant Coursework: Data Structures and Algorithms, Object Oriented Programming, Computer Architecture, Database Systems, Artificial Intelligence, Mobile Application Development, Systems Programming, Big Data Analytics/Cloud Computing'
        value={educationExperience.school_description}
        onChange={handleChange}
      />
      <div className={styles.button_container}>
        <div className={styles.delete_container}>
          <button
            type='button'
            className={styles.delete_button}
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
        <div className={styles.submit_cancel_container}>
          <button type='submit' className={styles.submit_button}>
            Submit
          </button>
          <button
            type='button'
            className={styles.cancel_button}
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export function EducationExperienceDiv({ educationExperience, handleEdit }) {
  return (
    <div className={styles.job_div_container}>
      <div className={styles.job_holder_container}>
        <p className={styles.job_experience_p}>
          {educationExperience.degree_name} at {''}
          {educationExperience.school_name}
        </p>
        <p>
          {educationExperience.start_date} - {educationExperience.end_date}
        </p>
      </div>
      <div className={styles.edit_img_container}>
        <img
          className='edit_experience_img'
          src='/assets/edit_img.png'
          alt='Edit history button'
          height='40'
          width='40'
          onClick={handleEdit}
        />
      </div>
    </div>
  );
}

export default function Education({
  educationExperience,
  setEducationExperience,
}) {
  const [editIndex, setEditIndex] = useState(null);
  const [tempExp, setTempExp] = useState({});

  const handleEdit = (index) => {
    setEditIndex(index);
    setTempExp({ ...educationExperience[index] });
  };

  const updateTempExp = (updatedFields) => {
    setTempExp((prev) => ({ ...prev, ...updatedFields }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEducationExperience((prev) => {
      const newExperience = [...prev];
      newExperience[editIndex] = { ...tempExp };
      return newExperience;
    });
    setEditIndex(null);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    const isEmpty = Object.values(tempExp).every(
      (value) => value.trim() === ''
    );

    if (isEmpty && editIndex !== null) {
      setEducationExperience((prev) =>
        prev.filter((_, index) => index !== editIndex)
      );
    }
    setEditIndex(null);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      setEducationExperience((prev) =>
        prev.filter((_, index) => index !== editIndex)
      );
    }
    setEditIndex(null);
  };

  const handleAddEducation = () => {
    const newEducation = {
      school_name: '',
      degree_name: '',
      start_date: '',
      end_date: '',
      school_location: '',
      school_description: '',
    };
    setEducationExperience((prev) => [...prev, newEducation]);
    setEditIndex(educationExperience.length);
    setTempExp(newEducation);
  };

  return (
    <>
      <h1 className={styles.h1}>
        Education History
        <div className={styles.div_line}></div>
        {educationExperience.map((education, index) => (
          <div key={index}>
            {editIndex === index ? (
              <EducationExperienceForm
                educationExperience={tempExp}
                updateEducationExperience={updateTempExp}
                handleSubmit={handleSubmit}
                handleCancel={handleCancel}
                handleDelete={handleDelete}
              />
            ) : (
              <EducationExperienceDiv
                educationExperience={education}
                handleEdit={() => handleEdit(index)}
              />
            )}
          </div>
        ))}
        <div className={styles.add_container}>
          <button
            className={styles.add_education_btn}
            onClick={handleAddEducation}
          >
            + Add Education
          </button>
        </div>
      </h1>
    </>
  );
}
