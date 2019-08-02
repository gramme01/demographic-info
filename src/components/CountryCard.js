import React from "react";
// import { Link } from "react-router-dom";

import StyledCountryCard from "../styles/StyledCountryCard";

const CountryCard = ({ country }) => {
	const { name, population, region, capital, flag, alpha3Code } = country;
	return (
		<StyledCountryCard alpha3code={alpha3Code}>
			<img src={flag} alt={`${name} flag`} className='flag' />
			<div className='info'>
				<h2>{name}</h2>
				<p>
					<span>Population: </span>
					{population}
				</p>
				<p>
					<span>Region: </span>
					{region}
				</p>
				<p>
					<span>Capital: </span>
					{capital}
				</p>
			</div>
		</StyledCountryCard>
	);
};

export default CountryCard;
