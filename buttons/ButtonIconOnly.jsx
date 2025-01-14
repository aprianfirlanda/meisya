import PropTypes from 'prop-types';

function ButtonIconOnly({ label, type = 'button', className, Icon, iconClassName, action }) {
  return (
    <button type={type} data-tip={label} className={`tooltip btn ${className}`} onClick={action}>
      <Icon className={`inline-block ${iconClassName}`} />
    </button>
  );
}

ButtonIconOnly.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  iconClassName: PropTypes.string.isRequired,
  action: PropTypes.func,
};

export default ButtonIconOnly;
