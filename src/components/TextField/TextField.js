import React from 'react';
import PropTypes from 'prop-types';

import FormItemWrapper from '../FormItemWrapper';
import { StyledInput } from './TextField.styled';

export const TextField = ({
	caption,
	dataQaId,
	isRequired,
	isValid,
	label,
	name,
	onBlurFieldCallback,
	onChangeCallback,
	placeholder
}) => (
	<FormItemWrapper
		label={label}
		name={name}
		isValid={isValid}
		isRequired={isRequired}
		caption={caption}
	>
		<StyledInput
			type="text"
			name={name}
			placeholder={placeholder}
			data-qa-id={dataQaId}
			onChange={onChangeCallback}
			onBlur={onBlurFieldCallback}
		/>
	</FormItemWrapper>
);

TextField.propTypes = {
	caption: PropTypes.string,
	dataQaId: PropTypes.string,
	isRequired: PropTypes.bool,
	isValid: PropTypes.bool,
	label: PropTypes.string,
	name: PropTypes.string,
	onBlurFieldCallback: PropTypes.func,
	onChangeCallback: PropTypes.func,
	placeholder: PropTypes.string
};

export default TextField;
