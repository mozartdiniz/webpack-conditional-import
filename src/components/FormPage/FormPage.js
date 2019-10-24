import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import {
	FormWrapper,
	FormInnerContainer,
	PageTitle,
	PageCaption,
	ButtonWrapper
} from './FormPage.style';

export const FormPage = ({ label, caption, children, pages, goToNextPage }) => (
	<Fragment>
		<FormWrapper>
			<PageTitle>{label}</PageTitle>
			<FormInnerContainer>
				<PageCaption>{caption}</PageCaption>
				{children}
			</FormInnerContainer>
		</FormWrapper>
		<ButtonWrapper>
			<button onClick={() => goToNextPage(currentPage)}>Next Page</button>
		</ButtonWrapper>
	</Fragment>
)

FormPage.propTypes = {
	label: PropTypes.string,
	caption: PropTypes.string,
	children: PropTypes.node,
	goToNextPage: PropTypes.func
};
