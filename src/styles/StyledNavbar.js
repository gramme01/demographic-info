import styled from "styled-components";

const StyledHeader = styled.header`
	background: ${props => props.theme.elements};
	color: ${props => props.theme.text};
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 5rem;
	padding: 1rem;
	box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.2);

	.title {
		font-size: 1.2rem;
	}

	.theme {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-flow: column nowrap;
	}

	.toggle {
		position: relative;
		width: 1.8rem;
		height: 1.05rem;
		margin: 0.4rem;
	}

	/* Hide default HTML checkbox */
	.toggle input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	/* The slider */
	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border-radius: 3rem;
		background-color: ${props => props.theme.text};
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	.slider:before {
		position: absolute;
		content: "";
		height: 0.75rem;
		width: 0.75rem;
		left: 0.15rem;
		bottom: 0.15rem;
		border-radius: 50%;
		background-color: ${props => props.theme.background};
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	input:focus + .slider {
		box-shadow: 0 0 1px #2196f3;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(0.75rem);
		-ms-transform: translateX(0.75rem);
		transform: translateX(0.75rem);
	}

	/* @media screen and (min-width: 769px) {
		background: #000;

		.toggle {
			position: relative;
			width: 1.8rem;
			height: 1.05rem;
			margin: 0.4rem;
		}

		.toggle input {
			opacity: 0;
			width: 0;
			height: 0;
		}

		.slider {
			position: absolute;
			cursor: pointer;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			border-radius: 4rem;
			background-color: ${props => props.theme.text};
			-webkit-transition: 0.4s;
			transition: 0.4s;
		}

		.slider:before {
			position: absolute;
			content: "";
			height: 1rem;
			width: 1rem;
			left: 0.2rem;
			bottom: 0.2rem;
			border-radius: 50%;
			background-color: ${props => props.theme.background};
			-webkit-transition: 0.4s;
			transition: 0.4s;
		}

		input:focus + .slider {
			box-shadow: 0 0 1px #2196f3;
		}

		input:checked + .slider:before {
			-webkit-transform: translateX(1rem);
			-ms-transform: translateX(1rem);
			transform: translateX(1rem);
		}
	} */
`;

export default StyledHeader;