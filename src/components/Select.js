import React from "react";
import StyledSelect from "../styles/StyledSelect";

const Select = () => {
	return (
		<StyledSelect>
			<button>
				Filter by Region <i className='fas fa-chevron-down' />
			</button>
			<ul className='options'>
				<li className='option'>Africa</li>
				<li className='option'>America</li>
				<li className='option'>Asia</li>
				<li className='option'>Europe</li>
				<li className='option'>Oceania</li>
			</ul>
			{/* <select name='filter'>
				<option value=''>Filter by Region</option>
				<option value='Africa'>Africa</option>
				<option value='Americas'>America</option>
				<option value='Asia'>Asia</option>
				<option value='Europe'>Europe</option>
				<option value='Oceania'>Oceania</option>
			</select> */}
		</StyledSelect>
	);
};

export default Select;
