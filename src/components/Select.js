import React, { useState } from "react";
import { CountryConsumer } from "../Context";
import StyledSelect from "../styles/StyledSelect";

const Select = () => {
	//states
	const [isOpen, setIsOpen] = useState(false);
	const [label, setLabel] = useState("Filter by Region");

	//handlers
	const openToggleHandler = () => {
		setIsOpen(prev => !prev);
	};

	const labelChangeHandler = item => {
		if (item === "All") {
			setLabel("Filter by Region");
		} else {
			setLabel(item);
		}
		openToggleHandler();
	};

	//utility
	const fetchUnique = (items, type) => [
		...new Set(items.map(item => item[type]))
	];

	return (
		<CountryConsumer>
			{value => {
				const regions = fetchUnique(value.countries, "region");
				regions.sort();
				const filterList = ["All", ...regions].filter(
					item => item !== ""
				);
				console.log(filterList);
				return (
					<StyledSelect>
						<button onClick={() => openToggleHandler()}>
							{label}
							<i
								className={
									isOpen
										? "fas fa-chevron-up"
										: "fas fa-chevron-down"
								}
							/>
						</button>

						<ul className={isOpen ? "options" : "options hidden"}>
							{filterList.map(item => (
								<li
									key={item}
									value={item}
									className='option'
									onClick={() => labelChangeHandler(item)}>
									{item}
								</li>
							))}
						</ul>
					</StyledSelect>
				);
			}}
		</CountryConsumer>
	);
};

export default Select;
