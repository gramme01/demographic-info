import React, { Component } from "react";
// import data from "./data2";

const CountryContext = React.createContext();

class CountryProvider extends Component {
	//Everything about initializing state
	savedState = JSON.parse(localStorage.getItem("darkMode"));

	state = {
		countries: [],
		filteredCountries: [],
		renderedCountries: [],
		search: "",
		filterBy: null,
		url: "https://restcountries.eu/rest/v2/all",
		error: "Loading",
		darkMode: this.savedState ? this.savedState.darkMode : true
	};

	componentDidMount() {
		this.getData();
		this.persistDarkMode();
	}

	//Event Handlers
	themeToggleHandler = () => {
		this.setState(
			prev => ({ darkMode: !prev.darkMode }),
			() => this.persistDarkMode()
		);
	};

	searchHandler = e => {
		this.setState({ search: e.target.value }, () => this.filterBySearch());
	};

	//utilities
	getData = async () => {
		try {
			const data = await fetch(this.state.url);
			const response = await data.json();
			response.forEach(item => {
				item.population = this.formatNumbersWithComma(item.population);
			});
			if (response.length === 0) {
				this.setState(() => ({ error: "Oops, could not connect" }));
			} else {
				this.setState(() => ({
					countries: response,
					filteredCountries: response,
					renderedCountries: response,
					error: ""
				}));
			}
		} catch (error) {
			console.log(error);
		}
	};

	getCountryDetail = alpha3Code => {
		let tempCountries = [...this.state.countries];
		const country = tempCountries.find(
			country => country.alpha3Code === alpha3Code
		);
		return country;
	};

	filterByLabel = label => {
		let tempCountries = [...this.state.countries];
		if (label !== "Filter by Region") {
			tempCountries = tempCountries.filter(
				country => country.region === label
			);
		}
		this.setState(
			() => ({
				filteredCountries: tempCountries,
				renderedCountries: tempCountries,
				filterBy: label
			}),
			() => this.filterBySearch()
		);
	};

	searchCountriesByParameter = (obj, property, param) =>
		obj[property].toLowerCase().includes(param.toLowerCase());

	filterBySearch = () => {
		const { filteredCountries, search } = this.state;
		let tempCountries = [...filteredCountries];
		const searchedCountries = tempCountries.filter(
			country =>
				this.searchCountriesByParameter(country, "name", search) ||
				this.searchCountriesByParameter(country, "demonym", search) ||
				this.searchCountriesByParameter(
					country,
					"nativeName",
					search
				) ||
				this.searchCountriesByParameter(country, "capital", search)
		);
		this.setState(() => ({ renderedCountries: searchedCountries }));
	};

	persistDarkMode = () => {
		localStorage.setItem(
			"darkMode",
			JSON.stringify({ darkMode: this.state.darkMode })
		);
	};

	formatNumbersWithComma = num =>
		num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	render() {
		return (
			<CountryContext.Provider
				value={{
					...this.state,
					themeToggleHandler: this.themeToggleHandler,
					getCountryDetail: this.getCountryDetail,
					filterByLabel: this.filterByLabel,
					filterBySearch: this.filterBySearch,
					searchHandler: this.searchHandler
				}}>
				{this.props.children}
			</CountryContext.Provider>
		);
	}
}

const CountryConsumer = CountryContext.Consumer;

export { CountryProvider, CountryConsumer, CountryContext };
