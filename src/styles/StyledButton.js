import styled from "styled-components";

const StyledButton = styled.button`
	margin: 2.5rem 1.5rem;
	padding: 0.5rem 1.5rem;
	background: ${({ theme }) => theme.elements};
	color: ${({ theme }) => theme.text};
	/* height: 2rem */
	border: none;
	outline: none;
	font-size: 0.8rem;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
	font-weight: 300;

	.fas {
		margin-right: 0.5rem;
	}
`;

export default StyledButton;
