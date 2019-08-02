import React, { Component } from "react";
import Details from "../components/Details";
import StyledButton from "../styles/StyledButton";
import { Link } from "react-router-dom";

export default class DetailsPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			alpha3Code: props.match.params.alpha3Code
		};
	}

	borderClickHandler = dest => {
		this.props.history.push({
			pathname: `/${dest}`
		});
	};

	render() {
		console.log(this.props);
		return (
			<>
				<StyledButton>
					<Link to='/'>
						<i className='fas fa-arrow-left' /> Back
					</Link>
				</StyledButton>
				<Details
					url={this.state.alpha3Code}
					borderClickHandler={this.borderClickHandler}
				/>
			</>
		);
	}
}
