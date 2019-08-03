import styled from "styled-components";

const StyledMainPage = styled.div`
	margin: 7rem auto 0;
	max-width: 1440px;

	.search {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
	}

	@media screen and (min-width: 769px) {
		padding: 0 calc(5vw - 2rem);

		.search {
			justify-content: space-between;
		}
	}
`;

export default StyledMainPage;
