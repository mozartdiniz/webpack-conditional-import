import React from 'react';
import PropTypes from 'prop-types';

import FormItemWrapper from '../FormItemWrapper';
import { StyledInput } from './PasswordField.style';

export const PasswordField = ({
	dataQaId,
	isRequired,
	isValid,
	label,
	name,
	onBlurFieldCallback,
	onChangeCallback
}) => (
	<FormItemWrapper
		label={label}
		name={name}
		isValid={isValid}
		isRequired={isRequired}
	>
		<StyledInput
			type="password"
			name={name}
			data-qa-id={dataQaId}
			onChange={onChangeCallback}
			onBlur={onBlurFieldCallback}
		/>
	</FormItemWrapper>
);

PasswordField.propTypes = {
	dataQaId: PropTypes.string,
	isValid: PropTypes.bool,
	label: PropTypes.string,
	name: PropTypes.string,
	onBlurFieldCallback: PropTypes.func,
	onChangeCallback: PropTypes.func
};

export default PasswordField;
