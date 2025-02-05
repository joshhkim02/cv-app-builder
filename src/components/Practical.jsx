import styles from '../styles/practical.module.css';
import InputField from './InputField.jsx';

function JobExperienceForm() {
  return (
    <form className={styles.job_experience_form}>
      <InputField
        className={styles.input_label + ' ' + styles.company}
        type='text'
        id='company_name'
        text='Company'
        defaultV='Google'
      />
      <InputField
        className={styles.input_label + ' ' + styles.role}
        type='text'
        id='job_title'
        text='Job Title'
        defaultV='Software Developer'
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
        id='job_location'
        text='Location'
        defaultV='San Jose, CA'
      />
      <InputField
        className={styles.input_label + ' ' + styles.description}
        type='textarea'
        id='job_duties'
        text='Description'
        defaultV='E.g.:
Design, develop, and maintain scalable software applications following best practices.
Collaborate with product managers, designers, and other engineers to understand requirements and translate them into technical solutions.
Write clean, efficient, and well-documented code in languages such as Python, Java, or JavaScript.'
      />
    </form>
  );
}

export function JobExperienceDiv({ role, company, start, end }) {
  return (
    <div className={styles.job_div_container}>
      <div className={styles.job_holder_container}>
        <p className={styles.job_experience_p}>
          {role} at {company}
        </p>
        <p>
          {start} - {end}
        </p>
      </div>
      <div className={styles.edit_img_container}>
        <img
          src='src/assets/edit_img.png'
          alt='Edit history button'
          height='40'
          width='40'
        ></img>
      </div>
    </div>
  );
}

export default function Practical() {
  return (
    <>
      <h1 className={styles.h1}>
        Employment History
        <div className={styles.div_line}></div>
        <JobExperienceForm />
        <JobExperienceDiv
          role='Software Developer'
          company='Google'
          start='10/2/2020'
          end='7/1/2024'
        />
      </h1>
    </>
  );
}
