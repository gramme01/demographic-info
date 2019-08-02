import styled from "styled-components";

const StyledCountryCardList = styled.div`
	margin: 1.5rem auto;
	max-width: 1440px;
	padding: 1rem;
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(auto-fill, minmax(16rem, 16rem));
	grid-gap: 2rem;

	@media screen and (min-width: 769px) {
		grid-gap: 4.5rem;
	}
`;

export default StyledCountryCardList;
