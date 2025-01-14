import PropTypes from 'prop-types';

function Select({
  id,
  label,
  placeholder = 'Choose...',
  value,
  onChange,
  disabled,
  options,
  errorMessage,
}) {
  return (
    <div className="flex flex-col lg:flex-row items-start">
      <label htmlFor={id} className="label w-44">
        <span className="label-text">{label}</span>
      </label>
      <div className="flex-row w-full lg:w-auto lg:grow">
        <select
          id={id}
          className={`select select-bordered select-primary w-full ${errorMessage && 'select-error'}`}
          value={value}
          onChange={onChange}
          disabled={disabled}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.id} value={`${option.id}`}>
              {option.name}
            </option>
          ))}
        </select>
        {errorMessage && <p className="text-base text-red-500 opacity-70">{errorMessage}</p>}
      </div>
    </div>
  );
}

const option = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
};

Select.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape(option)).isRequired,
  errorMessage: PropTypes.string,
};

export default Select;
