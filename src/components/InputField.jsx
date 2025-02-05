export default function InputField({
  type,
  id,
  text,
  defaultV,
  className,
  value,
  onChange,
}) {
  return (
    <p className={className}>
      <label htmlFor={id}>{text}</label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={id}
          placeholder={defaultV}
          value={value}
          onChange={onChange}
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          placeholder={defaultV}
          value={value}
          onChange={onChange}
        />
      )}
    </p>
  );
}
