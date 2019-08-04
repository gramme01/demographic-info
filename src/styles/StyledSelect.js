import styled from "styled-components";

const StyledSelect = styled.div`
	width: 12.5rem;
	margin: 1rem 2rem;
	padding-bottom: 1rem;
	font-size: 0.8rem;
	z-index: 1;
	overflow-y: hidden;

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
		color: ${({ theme }) => theme.placeholder};
		cursor: pointer;
		box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
		z-index: 2;
	}

	.fas {
		position: absolute;
		right: 1rem;
	}

	.options {
		background: ${({ theme }) => theme.elements};
		margin-top: 0.4rem;
		width: 100%;
		padding: 0.5rem 1.4rem;
		border-radius: 0.5rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
		transition: all 0.5s linear;
	}

	.hidden {
		transform: translateY(-100%);
		visibility: hidden;
	}

	.option {
		list-style: none;
		margin-top: 0.2rem;
		padding: 0.4rem 0;
		cursor: pointer;
		color: ${({ theme }) => theme.text};

		:first-child {
			margin-top: 0;
		}
	}
`;

export default StyledSelect;
