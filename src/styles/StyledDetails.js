import styled from "styled-components";

const StyledDetails = styled.div`
	max-width: 1440px;
	margin: 1.5rem;

	img {
		width: 100%;
		border-radius: 0.5rem;
		display: block;
		margin: 1.5rem 0;
	}

	section {
		display: flex;
		flex-direction: column;
	}

	h2 {
		margin: 1.5rem 0;
	}

	.details {
		display: flex;
		flex-direction: column;
	}

	.details > * {
		margin-bottom: 2rem;
	}

	.group {
		text-transform: capitalize;

		p {
			margin: 0.5rem 0;
		}

		p span {
			color: ${({ theme }) => theme.text};
			font-weight: 600;
		}
	}

	/* .border {

	} */
`;

export default StyledDetails;
