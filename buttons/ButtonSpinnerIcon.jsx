import PropTypes from 'prop-types';

function ButtonSpinnerIcon({
  label,
  type = 'button',
  className,
  Icon,
  iconClassName,
  action,
  isProcessing,
  processingText = '...Loading',
  disabled,
}) {
  return (
    <button type={type} className={`tooltip btn ${className}`} onClick={action} disabled={isProcessing || disabled}>
      {isProcessing ? (
        <>
          <span className="loading loading-spinner"></span>
          {processingText}
        </>
      ) : (
        <>
          <Icon className={`inline-block ${iconClassName}`} />
          {label}
        </>
      )}
    </button>
  );
}

ButtonSpinnerIcon.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  iconClassName: PropTypes.string.isRequired,
  action: PropTypes.func,
  isProcessing: PropTypes.bool.isRequired,
  processingText: PropTypes.string,
  disabled: PropTypes.bool,
};

export default ButtonSpinnerIcon;
