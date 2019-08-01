import React from "react";
import { CountryConsumer } from "../Context";
import Header from "../styles/StyledNavbar";

const Navbar = () => {
	return (
		<CountryConsumer>
			{value => (
				<Header>
					<h1 className='title'>Where in the world?</h1>
					<div className='theme'>
						<label className='toggle'>
							<input
								type='checkbox'
								name='themeSwitch'
								onChange={() => value.themeToggleHandler()}
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
				</Header>
			)}
		</CountryConsumer>
	);
};

export default Navbar;
