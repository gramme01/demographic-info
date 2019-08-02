import React from "react";
import Search from "../components/Search";
import Select from "../components/Select";
import CountryCardList from "../components/CountryCardList";

const MainPage = () => {
	return (
		<>
			<Search />
			<Select />
			<CountryCardList />
		</>
	);
};

export default MainPage;
