import React from "react";
import { CountryConsumer } from "../Context";
import StyledSearch from "../styles/StyledSearch";

const Search = () => {
	return (
		<CountryConsumer>
			{({ searchHandler, search }) => (
				<StyledSearch className='searchfield'>
					<i className='fas fa-search' />
					<input
						type='text'
						name='countrySearch'
						placeholder='Search for a country...'
						value={search}
						onChange={searchHandler}
					/>
				</StyledSearch>
			)}
		</CountryConsumer>
	);
};

export default Search;
