import PropTypes from 'prop-types';

function Textarea({ id, label, placeholder = '', value, onChange, disabled, errorMessage }) {
  return (
    <div className="flex flex-col lg:flex-row items-start">
      <label htmlFor={id} className="label w-44">
        <span className="label-text">{label}</span>
      </label>
      <div className="flex-row lg:w-auto lg:grow">
        <textarea
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`input input-bordered input-primary w-full h-24 ${errorMessage && 'input-error'}`}
          disabled={disabled}
        />
        {errorMessage && <p className="text-base text-red-500 opacity-70">{errorMessage}</p>}
      </div>
    </div>
  );
}

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default Textarea;
