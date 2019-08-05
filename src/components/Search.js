import React from "react";
import { CountryConsumer } from "../Context";
import StyledSearch from "../styles/StyledSearch";

const Search = () => {
	return (
		<CountryConsumer>
			{({ searchHandler, search, filterBySearch }) => (
				<StyledSearch className='searchfield'>
					<i className='fas fa-search' onClick={filterBySearch} />

					<input
						type='text'
						name='countrySearch'
						placeholder='Search by name, native name or capital'
						value={search}
						onChange={searchHandler}
					/>
				</StyledSearch>
			)}
		</CountryConsumer>
	);
};

export default Search;
