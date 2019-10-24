import React from 'react';
import PropTypes from 'prop-types';

import { LineWrapper, RequiredMark, Caption, ErrorWrapper } from './FormItemWrapper.style';

export const FormItemWrapper = ({
	label,
	name,
	children,
	isRequired,
	isValid,
	caption
}) => (
	<LineWrapper id={name}>
		{ caption ? <Caption>{caption}</Caption> : null }
		<label htmlFor={name}>
			{label}
			{isRequired ? <RequiredMark>*</RequiredMark> : null}
		</label>
		<ErrorWrapper isValid={isValid}>
			{children}
		</ErrorWrapper>
	</LineWrapper>
);

FormItemWrapper.defaultProps = {
	isValid: true
};

FormItemWrapper.propTypes = {
	caption: PropTypes.string,
	children: PropTypes.node,
	isRequired: PropTypes.bool,
	isValid: PropTypes.bool,
	label: PropTypes.string,
	name: PropTypes.string
};
