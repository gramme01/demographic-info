import React from "react";
import { CountryConsumer } from "../Context";
import StyledCountryCardList from "../styles/StyledCountryCardList";
import StyledErrorList from "../styles/StyledErrorList";
import CountryCard from "./CountryCard";

const CountryCardList = () => {
	return (
		<CountryConsumer>
			{({ renderedCountries, error }) =>
				renderedCountries.length === 0 ? (
					<StyledErrorList>
						<div>
							<div className='flag'>?</div>
							<p className='info'>
								{error || "No Matching Country"}
							</p>
						</div>
					</StyledErrorList>
				) : (
					<StyledCountryCardList>
						{renderedCountries.map(country => (
							<CountryCard
								key={country.alpha3Code}
								country={country}
							/>
						))}
					</StyledCountryCardList>
				)
			}
		</CountryConsumer>
	);
};

export default CountryCardList;
