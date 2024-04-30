import React from 'react';

function Button({ onClick, className, children }) {
  return (
    <button className={`${className} bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
