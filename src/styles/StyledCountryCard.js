import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledCountryCard = styled(Link).attrs(props => ({
	to: `/${props.alpha3code}`
}))`
	background: ${({ theme }) => theme.elements};
	width: 16rem;
	height: 20.5rem;
	border-radius: 0.5rem;
	overflow: hidden;
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
	color: ${({ theme }) => theme.text};
	text-decoration: none;

	.flag {
		height: 10rem;
		width: 100%;
		object-fit: cover;
	}

	.info {
		padding: 1.2rem;

		h2 {
			font-size: 1.2rem;
			margin-bottom: 0.8rem;
		}
	}
`;

export default StyledCountryCard;
