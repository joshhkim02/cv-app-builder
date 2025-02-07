import styles from '../styles/education.module.css';
// import { JobExperienceDiv } from './Practical.jsx';
import InputField from './InputField.jsx';

function EducationExperienceForm() {
  return (
    <form className={styles.edu_experience_form}>
      <InputField
        className={styles.input_label + ' ' + styles.company}
        type='text'
        id='school_name'
        text='School'
        defaultV='University of California, Irvine'
      />
      <InputField
        className={styles.input_label + ' ' + styles.role}
        type='text'
        id='degree'
        text='Degree'
        defaultV='Bsc. Computer Engineering'
      />
      <InputField
        className={styles.input_label + ' ' + styles.start}
        type='text'
        id='start_date'
        text='Start Date'
        defaultV='10/10/20'
      />
      <InputField
        className={styles.input_label + ' ' + styles.end}
        type='text'
        id='end_date'
        text='End Date'
        defaultV='12/01/25'
      />
      <InputField
        className={styles.input_label + ' ' + styles.location}
        type='text'
        id='school_location'
        text='Location'
        defaultV='Irvine, CA'
      />
      <InputField
        className={styles.input_label + ' ' + styles.description}
        type='textarea'
        id='school_description'
        text='Description'
        defaultV='E.g.:
Honors: Magna Cum Laude (GPA: 3.76), Presidents List (2021-2022), Dean’s List (2020-2024)
Relevant Coursework: Data Structures and Algorithms, Object Oriented Programming, Computer Architecture, Database Systems, Artificial Intelligence, Mobile Application Development, Systems Programming, Big Data Analytics/Cloud Computing'
      />
    </form>
  );
}

export default function Education() {
  return (
    <>
      <h1 className={styles.h1}>
        Education History
        <div className={styles.div_line}></div>
        <EducationExperienceForm />
        {/* <JobExperienceDiv
          role='BSc. Computer Science'
          company='California State University, Pomona'
          start='8/1/2020'
          end='5/1/2024'
        /> */}
      </h1>
    </>
  );
}
