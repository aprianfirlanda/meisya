import PropTypes from 'prop-types';

function Radio({ id, label, value, onChange, disabled, options, errorMessage }) {
  return (
    <div className="flex flex-col lg:flex-row items-start">
      <label htmlFor={id} className="label w-44">
        <span className="label-text">{label}</span>
      </label>
      <div className="flex-row w-full lg:w-auto lg:grow">
        <div className="flex w-full">
          {options.map((option) => (
            <span className="flex items-center" key={option.id}>
              <input
                id={id}
                type="radio"
                name={id}
                value={option.id}
                className="radio radio-primary"
                checked={value === option.id}
                onChange={onChange}
                disabled={disabled}
              />
              <label className="label-text mx-2">{option.name}</label>
            </span>
          ))}
        </div>
        {errorMessage && <p className="text-base text-red-500 opacity-70">{errorMessage}</p>}
      </div>
    </div>
  );
}

const option = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
};

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape(option)).isRequired,
  errorMessage: PropTypes.string,
};

export default Radio;
