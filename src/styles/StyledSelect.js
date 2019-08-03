import styled from "styled-components";

const StyledSelect = styled.div`
	width: 12.5rem;
	position: relative;
	margin: 1rem 1rem;
	font-size: 0.8rem;

	button {
		position: relative;
		width: 100%;
		height: 3.125rem;
		border-radius: 0.5rem;
		background: ${({ theme }) => theme.elements};
		padding: 0 1.4rem;
		border: none;
		outline: none;
		text-align: left;
		color: ${({ theme }) => theme.text};
		cursor: pointer;
		box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
	}

	.fas {
		position: absolute;
		right: 1rem;
	}

	.options {
		visibility: hidden;
		position: absolute;
		background: ${({ theme }) => theme.elements};
		margin-top: 0.4rem;
		width: 100%;
		z-index: 100;
		padding: 0.5rem 1.4rem;
		border-radius: 0.5rem;
		box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
	}

	.option {
		list-style: none;
		margin-top: 0.2rem;
		padding: 0.4rem 0;
		cursor: pointer;
		color: ${({ theme }) => theme.placeholder};

		:hover {
			color: ${({ theme }) => theme.text};
		}

		:first-child {
			margin-top: 0;
		}
	}
`;

export default StyledSelect;
