import React from "react";
import StyledSearch from "../styles/StyledSearch";

const Search = () => {
	return (
		<StyledSearch className='searchfield'>
			<i className='fas fa-search' />
			<input
				type='text'
				name='countrySearch'
				placeholder='Search for a country...'
			/>
		</StyledSearch>
	);
};

export default Search;
