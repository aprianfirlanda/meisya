import PropTypes from 'prop-types';

export default function Checkbox({ id, label, value, onChange, disabled, errorMessage }) {
  return (
    <div className="flex flex-col lg:flex-row items-start">
      <label htmlFor={id} className="label w-44">
        <span className="label-text">{label}</span>
      </label>
      <div className="flex-row w-full lg:w-auto lg:grow">
        <div className="flex w-full">
          <input id={id} type="checkbox" checked={value} onChange={onChange} className="checkbox" disabled={disabled} />
        </div>
        {errorMessage && <p className="text-base text-red-500 opacity-70">{errorMessage}</p>}
      </div>
    </div>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
};
