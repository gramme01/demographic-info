import React, { Component } from "react";
import { CountryContext } from "../Context";
import StyledSelect from "../styles/StyledSelect";

class Select extends Component {
	static contextType = CountryContext;

	state = {
		isOpen: false,
		label: "Filter by Region"
	};

	//handlers
	openToggleHandler = () => {
		this.setState(prev => ({ isOpen: !prev.isOpen }));
	};

	labelChangeHandler = item => {
		if (item === "All") {
			this.setState(
				prev => ({ label: "Filter by Region" }),
				() => {
					this.openToggleHandler();
					this.context.filterByLabel(this.state.label);
				}
			);
		} else {
			this.setState(
				prev => ({ label: item }),
				() => {
					this.openToggleHandler();
					this.context.filterByLabel(this.state.label);
				}
			);
		}
	};

	//utility
	fetchUnique = (items, type) => [...new Set(items.map(item => item[type]))];

	render() {
		const { label, isOpen } = this.state;
		const regions = this.fetchUnique(this.context.countries, "region");
		regions.sort();
		const filterList = ["All", ...regions].filter(item => item !== "");
		return (
			<StyledSelect>
				<button onClick={() => this.openToggleHandler()}>
					{label}
					<i
						className={
							isOpen ? "fas fa-chevron-up" : "fas fa-chevron-down"
						}
					/>
				</button>

				<ul className={isOpen ? "options" : "options hidden"}>
					{filterList.map(item => (
						<li
							key={item}
							value={item}
							className='option'
							onClick={() => this.labelChangeHandler(item)}>
							{item}
						</li>
					))}
				</ul>
			</StyledSelect>
		);
	}
}

export default Select;
