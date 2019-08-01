import styled from "styled-components";

const StyledSearch = styled.input.attrs(props => ({
	type: "search"
}))`
	display: block;
	width: 90%;
	height: 3.125rem;
	margin: 1.5rem auto;
	padding: 1rem 1rem 1rem 2rem;
	background: ${props => props.theme.elements};
	border: none;
	outline: none;
	font-size: 1rem;
	caret-color: ${({ theme }) => theme.placeholder};
	color: ${({ theme }) => theme.text};

	::placeholder {
		color: ${({ theme }) => theme.placeholder};
	}
`;

export default StyledSearch;
