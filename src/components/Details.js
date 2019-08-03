import React, { Component } from "react";
import { CountryContext } from "../Context";
import StyledDetails from "../styles/StyledDetails";

import StyledButtonPad0 from "../styles/StyledButtonPad0";

export default class Details extends Component {
	static contextType = CountryContext;

	render() {
		const { getCountryDetail } = this.context;
		const { countries } = this.context;
		const country = getCountryDetail(this.props.url);
		console.log(countries);
		if (!country) {
			return (
				<div className='error'>
					<h2 className='error'>Error 404</h2>
					<p>No such country could be found</p>
				</div>
			);
		}

		const {
			name,
			flag,
			nativeName,
			population,
			region,
			subregion,
			capital,
			topLevelDomain,
			currencies,
			languages,
			borders
		} = country;

		const objectArrayToString = (detail, property) => {
			const value = [];
			detail.map(item => {
				return value.push(item[property]);
			});
			return value.join(", ");
		};

		return (
			<StyledDetails>
				<img src={flag} alt={`${name} flag`} />
				<section>
					<h2>{name}</h2>
					<div className='details'>
						<div className='group'>
							<p>
								<span>native name: </span>
								{nativeName}
							</p>
							<p>
								<span>population: </span>
								{population}
							</p>
							<p>
								<span>region: </span>
								{region}
							</p>
							<p>
								<span>sub region: </span>
								{subregion}
							</p>
							<p>
								<span>capital: </span>
								{capital}
							</p>
						</div>

						<div className='group'>
							<p>
								<span>top level domain: </span>
								{topLevelDomain.join(", ")}
							</p>
							<p>
								<span>currencies: </span>
								{objectArrayToString(currencies, "name")}
							</p>
							<p>
								<span>languages: </span>
								{objectArrayToString(languages, "name")}
							</p>
						</div>
					</div>
					<div className='border'>
						<h3>Border Countries: </h3>
						<div className='border-list'>
							{borders.map(border => {
								const neighbour = countries.find(
									country => country.alpha3Code === border
								);
								return (
									<StyledButtonPad0
										key={border}
										to={`/${border}`}>
										{neighbour.name}
									</StyledButtonPad0>
								);
							})}
						</div>
					</div>
				</section>
			</StyledDetails>
		);
	}
}
