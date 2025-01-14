import PropTypes from 'prop-types';

function ButtonSpinner({
  label,
  type = 'button',
  className,
  action,
  isProcessing,
  processingText = '...Loading',
}) {
  return (
    <button type={type} className={`btn ${className}`} onClick={action} disabled={isProcessing}>
      {isProcessing ? (
        <>
          <span className="loading loading-spinner"></span>
          {processingText}
        </>
      ) : (
        label
      )}
    </button>
  );
}

ButtonSpinner.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string.isRequired,
  action: PropTypes.func,
  isProcessing: PropTypes.bool.isRequired,
  processingText: PropTypes.string,
};

export default ButtonSpinner;
