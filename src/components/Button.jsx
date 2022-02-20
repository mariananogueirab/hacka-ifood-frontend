import React from 'react';
import PropTypes from 'prop-types';
import '../styles/button.css';

function Button({
  testid, disabled, onClick, label, className, type,
}) {
  return (
    <button
      type={type || 'submit'}
      data-testid={testid}
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      {label}
    </button>

  );
}

Button.propTypes = {
  testid: PropTypes.string,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  disabled: undefined,
  onClick: undefined,
  className: undefined,
  testid: undefined,
  type: undefined,
};

export default Button;
