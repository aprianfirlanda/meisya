import PropTypes from 'prop-types';

export default function ButtonIcon({ label, type = 'button', className, Icon, iconClassName, action }) {
  return (
    <button type={type} className={`btn ${className}`} onClick={action}>
      <Icon className={`inline-block ${iconClassName}`} />
      {label}
    </button>
  );
}

ButtonIcon.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  iconClassName: PropTypes.string.isRequired,
  action: PropTypes.func,
};
