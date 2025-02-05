import styles from '../styles/general.module.css';
import InputField from './InputField.jsx';

export default function General({ personalDetails, setPersonalDetails }) {
  const handleChange = (e) => {
    const { id, value } = e.target;
    setPersonalDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };

  return (
    <>
      <h1 className={styles.h1}>
        Personal Details
        <div className={styles.div_line}></div>
        <form className={styles.general_form}>
          <InputField
            className={styles.input_label}
            type='text'
            id='firstName'
            text='First Name'
            defaultV='John'
            value={personalDetails.firstName}
            onChange={handleChange}
          />
          <InputField
            className={styles.input_label}
            type='text'
            id='lastName'
            text='Last Name'
            defaultV='Doe'
            value={personalDetails.lastName}
            onChange={handleChange}
          />
          <InputField
            className={styles.input_label}
            type='text'
            id='email'
            text='Email'
            defaultV='johndoe@gmail.com'
            value={personalDetails.email}
            onChange={handleChange}
          />
          <InputField
            className={styles.input_label}
            type='text'
            id='phoneNum'
            text='Phone Number'
            defaultV='123-456-7890'
            value={personalDetails.phoneNum}
            onChange={handleChange}
          />
          <InputField
            className={styles.input_label}
            type='text'
            id='address'
            text='Address'
            defaultV='230 Same St, Los Angeles CA, 90210'
            value={personalDetails.address}
            onChange={handleChange}
          />
          <InputField
            className={styles.input_label}
            type='text'
            id='occupation'
            text='Occupation'
            defaultV='Software Engineer'
            value={personalDetails.occupation}
            onChange={handleChange}
          />
          <InputField
            className={styles.input_label}
            type='text'
            id='linkedin'
            text='LinkedIn'
            defaultV='https://www.linkedin.com/in/username'
            value={personalDetails.linkedin}
            onChange={handleChange}
          />
          <InputField
            className={styles.input_label}
            type='text'
            id='portfolio'
            text='Portfolio'
            defaultV='https://github.com/username'
            value={personalDetails.portfolio}
            onChange={handleChange}
          />
          <InputField
            className={styles.input_label + ' ' + styles.about_textarea}
            type='textarea'
            id='about'
            text='About'
            defaultV='E.g.: Motivated developer with multiple years of experience at FAANG companies...'
            value={personalDetails.about}
            onChange={handleChange}
          />
          <div className={styles.input_file}>
            <InputField
              className={styles.input_label}
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
