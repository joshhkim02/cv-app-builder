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
      <h1 className={styles.general_h1}>
        Personal Details
        <div className={styles.div_line}></div>
        <form className={styles.general_form}>
          <InputField
            className={styles.input_label}
            type='text'
            id='first_name'
            text='First Name'
            defaultV='John'
            value={personalDetails.first_name}
            onChange={handleChange}
          />
          <InputField
            className={styles.input_label}
            type='text'
            id='last_name'
            text='Last Name'
            defaultV='Doe'
            value={personalDetails.last_name}
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
            id='phone_num'
            text='Phone Number'
            defaultV='123-456-7890'
            value={personalDetails.phone_num}
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
            defaultV='Passionate and detail-oriented Software Engineer with hands-on experience in developing scalable, efficient solutions. Proficient in Python, Java, C#, and modern web technologies. Eager to apply technical expertise and problem-solving skills in a dynamic, innovative team environment.'
            value={personalDetails.about}
            onChange={handleChange}
          />
        </form>
      </h1>
    </>
  );
}
