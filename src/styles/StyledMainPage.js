import styled from "styled-components";

const StyledMainPage = styled.div`
	margin: 5.5rem auto 0;
	max-width: 1440px;

	.search {
		display: flex;
		flex-flow: row wrap;
		justify-content: flex-start;
	}

	@media screen and (min-width: 769px) {
		padding: 0 calc(5vw - 2rem);
		margin: 6.5rem auto 0;

		.search {
			justify-content: space-between;
			margin: 0 auto;
		}
	}
`;

export default StyledMainPage;
