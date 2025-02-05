import { useState } from 'react';
import styles from '../styles/general.module.css';
import InputField from './InputField.jsx';

export default function General() {
  const [firstName, setFirstName] = useState('John');

  return (
    <>
      <h1 className={styles.h1}>
        Personal Details
        <div className={styles.div_line}></div>
        <form className={styles.general_form}>
          <InputField
            className={styles.input_label}
            type='text'
            id='first_name'
            text='First Name'
            defaultV='John'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <InputField
            className={styles.input_label}
            type='text'
            id='last_name'
            text='Last Name'
            defaultV='Doe'
          />
          <InputField
            className={styles.input_label}
            type='text'
            id='email'
            text='Email'
            defaultV='johndoe@gmail.com'
          />
          <InputField
            className={styles.input_label}
            type='text'
            id='phone_num'
            text='Phone Number'
            defaultV='123-456-7890'
          />
          <InputField
            className={styles.input_label}
            type='text'
            id='address'
            text='Address'
            defaultV='230 Same St, Los Angeles CA, 90210'
          />
          <InputField
            className={styles.input_label}
            type='text'
            id='occupation'
            text='Occupation'
            defaultV='Software Engineer'
          />
          <InputField
            className={styles.input_label}
            type='text'
            id='linkedin'
            text='LinkedIn'
            defaultV='https://www.linkedin.com/in/username'
          />
          <InputField
            className={styles.input_label}
            type='text'
            id='portfolio'
            text='Portfolio'
            defaultV='https://github.com/username'
          />
          <InputField
            className={styles.input_label + ' ' + styles.about_textarea}
            type='textarea'
            id='about'
            text='About'
            defaultV='E.g.: Motivated developer with multiple years of experience at FAANG companies...'
          />
          <div className={styles.input_file}>
            <InputField
              className={styles.input_label}
              type='file'
              id='profile_picture'
              text='Profile Picture'
            />
          </div>
          {/* Display the updated value
          <div className={styles.preview}>
            <h2>Live Preview:</h2>
            <p>
              First Name: <strong>{firstName}</strong>
            </p>
          </div> */}
        </form>
      </h1>
    </>
  );
}
