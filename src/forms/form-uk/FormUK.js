import React from 'react';

import TextField from '../../components/TextField';
import EmailField from '../../components/EmailField';
import SelectField from '../../components/SelectField';
import SelectFieldOption from '../../components/SelectFieldOption';
import FormPage from '../../components/FormPage';

export const FormUK = ({ onFieldChange }) => (
    <div>
        <FormPage label="Enter Your Details">
            <EmailField
                onChangeCallback={ onFieldChange }
                name="email"
                isRequired
                label="Email Address"
            />
            <SelectField label="Title">
                <SelectFieldOption label="Select Title" value="" />
                <SelectFieldOption label="Miss" value="Miss" />
                <SelectFieldOption label="Mrs" value="Mrs" />
                <SelectFieldOption label="Ms" value="Ms" />
            </SelectField>
            <TextField
                onChangeCallback={ onFieldChange }
                name="firstName"
                isRequired
                label="First Name"
            />
            <TextField
                onChangeCallback={ onFieldChange }
                name="surname"
                isRequired
                label="Surname"
            />
        </FormPage>
    </div>
);
