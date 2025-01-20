import styles from '../styles/general.module.css';

export function InputField({ type, id, text, defaultV, className }) {
  return (
    <p className={className}>
      <label htmlFor={id}>{text}</label>
      <input type={type} id={id} name={id} placeholder={defaultV} />
    </p>
  );
}

export default function General() {
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
          <p className={styles.about_container}>
            <label htmlFor='text_area'>About</label>
            <textarea
              className={styles.text_about}
              placeholder='E.g.: Motivated developer with multiple years of experience at FAANG companies...'
            ></textarea>
          </p>
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
