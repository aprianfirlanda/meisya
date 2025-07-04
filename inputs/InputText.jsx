import PropTypes from 'prop-types';

function InputText({
  id,
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  disabled,
  errorMessage,
}) {
  return (
    <div className="flex flex-col lg:flex-row items-start">
      <label htmlFor={id} className="label w-44">
        <span className="label-text">{label}</span>
      </label>
      <div className="flex-row w-full lg:w-auto lg:grow">
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`input input-bordered input-primary w-full ${errorMessage && 'input-error'}`}
          disabled={disabled}
        />
        {errorMessage && <p className="text-base text-red-500 opacity-70">{errorMessage}</p>}
      </div>
    </div>
  );
}

InputText.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default InputText;
