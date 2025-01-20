import PropTypes from 'prop-types';
import styles from '../styles/general.module.css';

function InputField({ type, id, text, defaultV }) {
  return (
    <p>
      <label htmlFor={id}>{text}</label>
      <input type={type} id={id} name={id} placeholder={defaultV} />
    </p>
  );
}

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  defaultV: PropTypes.string,
};

export default function General() {
  return (
    <>
      <h1 className={styles.h1}>
        Personal Details
        <div className={styles.div_line}></div>
        <form>
          <InputField
            type='text'
            id='first_name'
            text='First Name'
            defaultV='John'
          />
          <InputField
            type='text'
            id='last_name'
            text='Last Name'
            defaultV='Doe'
          />
          <InputField
            type='text'
            id='email'
            text='Email'
            defaultV='johndoe@gmail.com'
          />
          <InputField
            type='text'
            id='phone_num'
            text='Phone Number'
            defaultV='123-456-7890'
          />
          <InputField
            type='text'
            id='address'
            text='Address'
            defaultV='230 Same St, Los Angeles CA, 90210'
          />
          <InputField
            type='text'
            id='occupation'
            text='Occupation'
            defaultV='Software Engineer'
          />
          <InputField
            type='text'
            id='linkedin'
            text='LinkedIn'
            defaultV='https://www.linkedin.com/in/username'
          />
          <InputField
            type='text'
            id='portfolio'
            text='Portfolio'
            defaultV='https://github.com/username'
          />
          <p className={styles.about_container}>
            <label htmlFor='text_area'>About</label>
            <textarea
              className={styles.text_about}
              placeholder='E.g.: Motivated developer with multiple years of experience at FAANG companies...'
            ></textarea>
          </p>
          <div className={styles.input_file}>
            <InputField
              type='file'
              id='profile_picture'
              text='Profile Picture'
            />
          </div>
        </form>
      </h1>
    </>
  );
}
