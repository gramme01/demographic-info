import React from "react";
import { CountryConsumer } from "../Context";
import StyledCountryCardList from "../styles/StyledCountryCardList";
import CountryCard from "./CountryCard";

const CountryCardList = () => {
	return (
		<StyledCountryCardList>
			<CountryConsumer>
				{({ filteredCountries }) =>
					filteredCountries.map(country => (
						<CountryCard
							key={country.alpha3Code}
							country={country}
						/>
					))
				}
			</CountryConsumer>
		</StyledCountryCardList>
	);
};

export default CountryCardList;
