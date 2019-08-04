import React, { Component } from "react";
import data from "./data2";

const CountryContext = React.createContext();

class CountryProvider extends Component {
	state = {
		countries: [],
		filteredCountries: [],
		darkMode: true
	};

	componentDidMount() {
		this.getData();
	}

	getData = () => {
		let response = [];
		data.forEach(item => {
			const singleItem = { ...item };
			response = [...response, singleItem];
		});
		this.setState({ countries: response, filteredCountries: response });
	};

	getCountryDetail = alpha3Code => {
		let tempCountries = [...this.state.countries];
		const country = tempCountries.find(
			country => country.alpha3Code === alpha3Code
		);
		console.log(country);
		return country;
	};

	themeToggleHandler = () => {
		this.setState(prev => ({ darkMode: !prev.darkMode }));
	};

	// filterRender = label => {
	// 	if (label === "Filter by Region") {
	// 		this.setState({
	// 			filteredCountries: [...this.state.countries]
	// 		});
	// 	} else {
	// 		const filtered = this.sortCountry(label);
	// 		this.setState({
	// 			filteredCountries: filtered
	// 		});
	// 	}
	// 	console.log("filterRENDER rAN");
	// };

	filterRender = param => {
		let tempCountries = [...this.state.countries];
		if (param !== "Filter by Region") {
			tempCountries = tempCountries.filter(
				country => country.region === param
			);
		}
		console.log("SORTCOUNRTY rAN");
		this.setState(
			() => ({ filteredCountries: tempCountries }),
			console.log(this.state)
		);
	};

	render() {
		return (
			<CountryContext.Provider
				value={{
					...this.state,
					themeToggleHandler: this.themeToggleHandler,
					getCountryDetail: this.getCountryDetail,
					filterRender: this.filterRender
				}}>
				{this.props.children}
			</CountryContext.Provider>
		);
	}
}

const CountryConsumer = CountryContext.Consumer;

export { CountryProvider, CountryConsumer, CountryContext };
