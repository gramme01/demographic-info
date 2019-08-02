import React, { Component } from "react";
import data from "./data";

const CountryContext = React.createContext();

class CountryProvider extends Component {
	state = {
		countries: [],
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
		this.setState({ countries: response });
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

	render() {
		return (
			<CountryContext.Provider
				value={{
					...this.state,
					themeToggleHandler: this.themeToggleHandler,
					getCountryDetail: this.getCountryDetail
				}}>
				{this.props.children}
			</CountryContext.Provider>
		);
	}
}

const CountryConsumer = CountryContext.Consumer;

export { CountryProvider, CountryConsumer, CountryContext };
