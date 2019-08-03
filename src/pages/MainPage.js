import React from "react";
import Search from "../components/Search";
import Select from "../components/Select";
import CountryCardList from "../components/CountryCardList";
import StyledMainPage from "../styles/StyledMainPage";

const MainPage = () => {
	return (
		<>
			<StyledMainPage>
				<div className='search'>
					<Search />
					<Select />
				</div>
				<CountryCardList />
			</StyledMainPage>
		</>
	);
};

export default MainPage;
