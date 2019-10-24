import React from 'react';
import PropTypes from 'prop-types';

import FormItemWrapper from '../FormItemWrapper';
import { ChildrenWrapper } from './DateField.style';

export const DateField = ({
	caption,
	children,
	dataQaId,
	isRequired,
	isValid,
	label,
	name
}) => (
	<FormItemWrapper
		label={label}
		name={name}
		isValid={isValid}
		isRequired={isRequired}
		caption={caption}
	>
		<ChildrenWrapper>{children}</ChildrenWrapper>
	</FormItemWrapper>
);

DateField.propTypes = {
	caption: PropTypes.string,
	children: PropTypes.node,
	dataQaId: PropTypes.string,
	isValid: PropTypes.bool,
	label: PropTypes.string,
	name: PropTypes.string,
};

export default DateField;
