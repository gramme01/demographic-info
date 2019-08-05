import styled from "styled-components";

const StyledHeader = styled.header`
	background: ${props => props.theme.elements};
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 5rem;
	padding: 1rem 2rem;
	box-shadow: 0 0.6rem 0.5rem -0.5rem rgba(0, 0, 0, 0.2);
	position: fixed;
	top: 0;
	width: 100%;
	margin: 0 auto;
	z-index: 900;

	.wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		max-width: 1440px;
		margin: 0 auto;
	}

	.title {
		font-weight: 600;
		font-size: calc(20px + (38 - 20) * ((100vw - 375px) / (1440 - 375)));
	}

	p {
		font-size: 0.8rem;
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
		transition: 0.4s;
	}

	input:focus + .slider {
		box-shadow: 0 0 1px #2196f3;
	}

	input:checked + .slider:before {
		transform: translateX(0.75rem);
	}

	@media screen and (min-width: 769px) {
		padding: 1rem 5vw;

		.toggle {
			width: 2.4rem;
			height: 1.4rem;
			margin: 0.8rem;
		}

		.theme {
			flex-flow: row nowrap;
		}

		p {
			font-size: 1.2rem;
		}

		.slider {
			border-radius: 4rem;
		}

		.slider:before {
			height: 1rem;
			width: 1rem;
			left: 0.2rem;
			bottom: 0.2rem;
		}

		input:checked + .slider:before {
			transform: translateX(1rem);
		}
	}

	@media screen and (min-width: 1441px) {
		.title {
			font-size: 2.4rem;
		}
	}
`;

export default StyledHeader;
