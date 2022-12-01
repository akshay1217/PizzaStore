// Inside src/components/Button/Button.js

import React from 'react';

const Button = ({ children, ...rest }) => {
  return (
    <button className="button" {...rest}>
      { children }
    </button>
  )
}

export default Button;