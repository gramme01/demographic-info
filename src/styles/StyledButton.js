import styled from "styled-components";

const StyledButton = styled.button`
	margin: ${props => (props.margin ? "1rem 1.5rem" : "0.5rem 1rem 0.5rem 0")};
	/* margin: 1rem 1.5rem; */
	padding: 0.5rem 1rem;
	background: ${({ theme }) => theme.elements};
	color: ${({ theme }) => theme.text};
	text-decoration: none;
	display: inline-block;
	border: none;
	outline: none;
	font-size: 0.8rem;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
	font-weight: 300;

	.fas {
		margin-right: 1rem;
	}
`;

export default StyledButton;
