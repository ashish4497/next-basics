/** @format */

import React from 'react';

const CustomInput = ({placeholder, onChange, value}:any) => {

  return (
    <input
      type='text'
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className='px-4 py-2 border-2 border-blue-800 border-opacity-20 outline-none'
    />
  );
};

export default CustomInput;
