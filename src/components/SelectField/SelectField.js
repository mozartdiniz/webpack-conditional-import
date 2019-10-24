import React from 'react';
import PropTypes from 'prop-types';

import FormItemWrapper from '../FormItemWrapper';
import { StyledSelect } from './SelectField.style';

export const SelectField = ({
	children,
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
		<StyledSelect
			name={name}
			data-qa-id={dataQaId}
			onChange={onChangeCallback}
			onBlur={onBlurFieldCallback}
		>
			{children}
		</StyledSelect>
	</FormItemWrapper>
);

SelectField.propTypes = {
	children: PropTypes.node,
	dataQaId: PropTypes.string,
	label: PropTypes.string,
	name: PropTypes.string,
	onBlurFieldCallback: PropTypes.func,
	onChangeCallback: PropTypes.func
};

export default SelectField;
