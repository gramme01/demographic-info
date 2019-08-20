import React from "react";
import { withRouter } from "react-router-dom";
import { CountryConsumer } from "../Context";
import Header from "../styles/StyledNavbar";

const Navbar = props => {
	//handle push to history and reset of state
	const redirect = () => props.history.push("/");

	return (
		<CountryConsumer>
			{value => (
				<Header>
					<div className='wrapper'>
						<h1
							className='title'
							onClick={() => {
								value.resetApp();
								redirect();
							}}>
							Where in the world?
						</h1>
						<div className='theme'>
							<label className='toggle'>
								<input
									type='checkbox'
									name='themeSwitch'
									checked={value.darkMode}
									onChange={value.themeToggleHandler}
								/>
								<span className='slider' />
							</label>
							{value.darkMode ? (
								<p>
									<i className='far fa-sun' /> Light Mode
								</p>
							) : (
								<p>
									<i className='far fa-moon' /> Dark Mode
								</p>
							)}
						</div>
					</div>
				</Header>
			)}
		</CountryConsumer>
	);
};

export default withRouter(Navbar);
