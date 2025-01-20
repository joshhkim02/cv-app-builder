import styles from '../styles/practical.module.css';
import { InputField } from './General.jsx';

function JobExperienceForm() {
  return (
    <form className={styles.job_experience_form}>
      <InputField
        type='text'
        id='first_name'
        text='First Name'
        defaultV='John'
      />
      <InputField
        type='text'
        id='first_name'
        text='First Name'
        defaultV='John'
      />
      <InputField
        type='text'
        id='first_name'
        text='First Name'
        defaultV='John'
      />
      <InputField
        type='text'
        id='first_name'
        text='First Name'
        defaultV='John'
      />
      <InputField
        type='text'
        id='first_name'
        text='First Name'
        defaultV='John'
      />
      <InputField
        type='text'
        id='first_name'
        text='First Name'
        defaultV='John'
      />
    </form>
  );
}

export default function Practical() {
  return (
    <>
      <h1 className={styles.h1}>
        Employment History
        <div className={styles.div_line}></div>
        <JobExperienceForm />
      </h1>
    </>
  );
}
