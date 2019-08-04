import React from "react";
import { CountryConsumer } from "../Context";
import StyledSearch from "../styles/StyledSearch";

const Search = () => {
	return (
		<CountryConsumer>
			{({ searchHandler, search, searchSubmit }) => (
				<StyledSearch className='searchfield'>
					<i className='fas fa-search' onClick={searchSubmit} />

					<input
						type='text'
						name='countrySearch'
						placeholder='Search for a country...'
						value={search}
						onChange={searchHandler}
						onSubmit={searchSubmit}
					/>
				</StyledSearch>
			)}
		</CountryConsumer>
	);
};

export default Search;
