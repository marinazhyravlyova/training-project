import React from 'react';

const Select = ({ name, options = [], required, caption }) => {
  return (
    <select name={name} required={required}>
      <option value="">{caption || '--Please choose the Option--'}</option>
      {options.map(({ name }) => <option value={name} key={name}>{name}</option>)}
    </select>
  );
};


export default Select;
