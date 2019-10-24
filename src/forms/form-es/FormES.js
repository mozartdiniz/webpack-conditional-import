import React from 'react';

import TextField from '../../components/TextField';
import EmailField from '../../components/EmailField';
import FormPage from '../../components/FormPage';

export const FormES = ({ onFieldChange }) => (
    <div>
        <FormPage label="RELLENA TUS DATOS">
            <EmailField
                onChangeCallback={ onFieldChange }
                name="email"
                isRequired
                label="Dirección de Email"
            />
            <TextField
                onChangeCallback={ onFieldChange }
                name="firstName"
                isRequired
                caption="Nombre y Apellidos como en el DNI/NIE."
                label="Nombre"
            />
            <TextField
                onChangeCallback={ onFieldChange }
                name="surname"
                isRequired
                label="Apellido 1"
            />
            <TextField
                onChangeCallback={ onFieldChange }
                name="secondSurname"
                isRequired
                caption="Deja este espacio en blanco si eres extranjero y no tienes segundo apellido."
                label="Apellido 2"
            />
        </FormPage>
    </div>
);
