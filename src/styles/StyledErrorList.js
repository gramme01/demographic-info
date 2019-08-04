import styled from "styled-components";

const StyledErrorList = styled.div`
	margin: 1rem auto;
	max-width: 1440px;
	padding: 11.8rem 2rem 0;
	display: flex;
	justify-content: center;
	text-align: center;

	& > div {
		background: ${({ theme }) => theme.elements};
		width: 16rem;
		border-radius: 0.5rem;
		overflow: hidden;
		box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
	}

	.flag {
		height: 10rem;
		background: ${({ theme }) => theme.placeholder};
		color: ${({ theme }) => theme.background};
		line-height: 10rem;
		font-size: 10rem;
		font-weight: 600;
	}

	.info {
		font-size: 1.4rem;
		line-height: 4rem;
	}

	@media screen and (min-width: 769px) {
		padding: 7rem 2rem 0;
	}
`;

export default StyledErrorList;
