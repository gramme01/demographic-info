import styled from "styled-components";

const StyledSearch = styled.div`
	width: calc(100vw - 2rem);
	max-width: 30rem;
	background: ${({ theme }) => theme.elements};
	margin: 1rem 1.5rem;
	height: 3.125rem;
	border-radius: 0.5rem;
	padding: 0 1rem;
	display: flex;
	align-items: center;
	justify-content: space-around;
	font-size: 0.8rem;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);

	input {
		width: 80%;
		color: ${({ theme }) => theme.text};
		background: transparent;
		border: none;
		outline: none;
		caret-color: ${({ theme }) => theme.placeholder};

		::placeholder {
			color: ${({ theme }) => theme.placeholder};
		}
	}
`;

export default StyledSearch;
