import PropTypes from 'prop-types';

function Button({ label, type = 'button', className, action }) {
  return (
    <button type={type} className={`btn ${className}`} onClick={action}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string.isRequired,
  action: PropTypes.func,
};

export default Button;
