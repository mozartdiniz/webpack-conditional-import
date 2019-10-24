import styled from 'styled-components';

export const LineWrapper = styled.div`
	overflow: visible;
	position: relative;
	margin: ${props => props.theme.form_line_wrapper_padding};
	padding: 0;
	clear: both;

	label {
		color: ${props => props.theme.form_label_text_color};
		float: left;
		font-size: ${props => props.theme.form_label_text_size};
		margin-right: 12px;
		padding: 0.4em 0 0;
		text-align: ${props => props.theme.form_label_text_align || 'left'};
		width: ${props => props.theme.form_label_width};
	}
`;


export const RequiredMark = styled.span`
	color: ${props => props.theme.form_required_mark_color};
	font-size: ${props => props.theme.form_required_mark_size};
	margin-left: 3px;
`;

export const Caption = styled.div`
	color: ${props => props.theme.form_caption_color};
	font-size: 9pt;
	font-style: italic;
	margin: ${props => props.theme.form_caption_margin};
	max-width: ${props => props.theme.form_caption_max_width};
	padding: ${props => props.theme.form_caption_padding};
`
export const ErrorWrapper = styled.span`
	display: inline-block;

	input[type="text"],
	input[type="email"],
	select,
	input[type="password"] {
		border: ${props => props.isValid ? 'auto' : '2px solid red' };
	}
`;
