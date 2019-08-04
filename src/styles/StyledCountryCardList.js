import styled from "styled-components";

const StyledCountryCardList = styled.div`
	margin: 1.5rem auto;
	max-width: 1440px;
	padding: 2rem;
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(auto-fill, minmax(16rem, 16rem));
	grid-gap: 2rem;
	transform: translateY(-17.25rem);

	@media screen and (min-width: 769px) {
		grid-gap: 4.5rem;
	}

	@media screen and (min-width: 1016px) {
		justify-content: space-between;
	}
`;

export default StyledCountryCardList;
