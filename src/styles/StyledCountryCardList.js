import styled from "styled-components";

const StyledCountryCardList = styled.div`
	margin: 1rem auto;
	max-width: 1440px;
	padding: 11.8rem 2rem 0;
	display: grid;
	justify-content: center;
	align-items: flex-start;
	grid-template-columns: repeat(auto-fill, minmax(16rem, 16rem));
	grid-gap: 2rem;

	@media screen and (min-width: 769px) {
		grid-gap: 4.5rem;
		padding: 7rem 2rem 0;
	}

	@media screen and (min-width: 1016px) {
		justify-content: space-between;
	}
`;

export default StyledCountryCardList;
