import React, { Component } from "react";
// import data from "./data2";

const CountryContext = React.createContext();

class CountryProvider extends Component {
	state = {
		countries: [],
		filteredCountries: [],
		search: "",
		url: "https://restcountries.eu/rest/v2/all",
		searchUrl: "https://restcountries.eu/rest/v2/name/",
		error: "",
		darkMode: true
	};

	componentDidMount() {
		this.getData();
	}

	getData = async () => {
		try {
			const data = await fetch(this.state.url);
			const response = await data.json();
			if (response.length === 0) {
				this.setState(() => ({ error: "No Results Found" }));
			} else {
				this.setState(() => ({
					countries: response,
					filteredCountries: response,
					error: ""
				}));
			}
		} catch (error) {
			console.log(error);
		}
	};

	// let response = [];
	// data.forEach(item => {
	// 	const singleItem = { ...item };
	// 	response = [...response, singleItem];
	// });
	// this.setState({ countries: response, filteredCountries: response });

	getCountryDetail = alpha3Code => {
		let tempCountries = [...this.state.countries];
		const country = tempCountries.find(
			country => country.alpha3Code === alpha3Code
		);
		return country;
	};

	themeToggleHandler = () => {
		this.setState(prev => ({ darkMode: !prev.darkMode }));
	};

	filterByLabel = label => {
		let tempCountries = [...this.state.countries];
		if (label !== "Filter by Region") {
			tempCountries = tempCountries.filter(
				country => country.region === label
			);
		}
		this.setState(
			() => ({ filteredCountries: tempCountries }),
			() => {
				console.log(this.state.filteredCountries);
			}
		);
	};

	searchHandler = e => {
		this.setState({ search: e.target.value });
	};

	searchSubmit = e => {
		e.preventDefault();
		const { search, searchUrl } = this.state;
		this.setState(
			{
				url: `${searchUrl}${search}`,
				search: ""
			},
			() => {
				this.getData();
			}
		);
	};

	render() {
		return (
			<CountryContext.Provider
				value={{
					...this.state,
					themeToggleHandler: this.themeToggleHandler,
					getCountryDetail: this.getCountryDetail,
					filterByLabel: this.filterByLabel,
					searchHandler: this.searchHandler,
					searchSubmit: this.searchSubmit
				}}>
				{this.props.children}
			</CountryContext.Provider>
		);
	}
}

const CountryConsumer = CountryContext.Consumer;

export { CountryProvider, CountryConsumer, CountryContext };
