import React from 'react';

export const TextField = ({ onChangeCallback, name }) => (
  <input type="text" onChange={onChangeCallback} name={ name }/>
);
