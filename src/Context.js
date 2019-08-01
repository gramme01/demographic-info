import React, { useState, useEffect } from "react";
import data from "./data";

const CountryContext = React.createContext();

const CountryProvider = props => {
	const [countries, setCountries] = useState({
		name: "",
		population: "",
		region: "",
		capital: "",
		nativeName: "",
		subregion: "",
		topLevelDomain: [],
		currencies: [],
		languagues: [],
		border: [],
		alpha3Code: ""
	});

	const [darkMode, setDarkMode] = useState(true);

	const themeToggleHandler = () => {
		setDarkMode(prevState => !prevState);
	};

	return (
		<CountryContext.Provider
			value={{ ...countries, darkMode, themeToggleHandler }}>
			{props.children}
		</CountryContext.Provider>
	);
};

const CountryConsumer = CountryContext.Consumer;

export { CountryProvider, CountryConsumer };
