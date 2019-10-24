import React from 'react';
import PropTypes from 'prop-types';

import FormItemWrapper from '../FormItemWrapper';
import { StyledInput } from './EmailField.styled';

export const EmailField = ({
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
			type="email"
			name={name}
			data-qa-id={dataQaId}
			onChange={onChangeCallback}
			onBlur={onBlurFieldCallback}
		/>
	</FormItemWrapper>
);

EmailField.propTypes = {
	dataQaId: PropTypes.string,
	isValid: PropTypes.bool,
	label: PropTypes.string,
	name: PropTypes.string,
	onBlurFieldCallback: PropTypes.func,
	onChangeCallback: PropTypes.func
};

export default EmailField;
