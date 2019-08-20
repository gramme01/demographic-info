import React, { Component } from "react";
import Details from "../components/Details";
import StyledButton from "../styles/StyledButton";
import StyledMainPage from "../styles/StyledMainPage";

export default class DetailsPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			alpha3Code: props.match.params.alpha3Code
		};
	}

	render() {
		return (
			<StyledMainPage>
				<StyledButton margin>
					<i className='fas fa-arrow-left' />
					Back
				</StyledButton>
				<Details url={this.state.alpha3Code} />
			</StyledMainPage>
		);
	}
}
