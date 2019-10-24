import React from 'react';

import TextField from '../form-items/TextField';

export const FormES = ({ onFieldChange }) => (
    <div>
        <h1>Form ES</h1>
        <strong>Nombre de usuario:</strong>
        <TextField onChangeCallback={ onFieldChange } name="username" />
    </div>
);
