import PropTypes from 'prop-types';

function ButtonSpinnerIconOnly({
  label,
  type = 'button',
  className,
  Icon,
  iconClassName,
  action,
  isProcessing,
}) {
  return (
    <button
      type={type}
      data-tip={label}
      className={`tooltip btn ${className}`}
      onClick={action}
      disabled={isProcessing}
    >
      {isProcessing ? (
        <>
          <span className="loading loading-spinner"></span>
        </>
      ) : (
        <Icon className={`inline-block ${iconClassName}`} />
      )}
    </button>
  );
}

ButtonSpinnerIconOnly.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  iconClassName: PropTypes.string.isRequired,
  action: PropTypes.func,
  isProcessing: PropTypes.bool.isRequired,
};

export default ButtonSpinnerIconOnly;
