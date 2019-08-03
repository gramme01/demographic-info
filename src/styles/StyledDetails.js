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
		font-size: 1.8rem;
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

	.border h3 {
		font-weight: 600;
		font-size: 1.2rem;
	}

	.border-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: flex-start;
	}

	@media screen and (min-width: 530px) {
		.details {
			flex-direction: row;
			justify-content: space-between;
		}
	}

	@media screen and (min-width: 800px) {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;

		img {
			width: 50%;
			height: auto;
		}

		section {
			width: 40%;
		}

		.details {
			flex-direction: column;
		}
	}

	@media screen and (min-width: 969px) {
		img {
			width: 40%;
		}

		section {
			width: 50%;
		}

		.details {
			flex-direction: row;
			justify-content: space-between;
		}
	}
`;

export default StyledDetails;
