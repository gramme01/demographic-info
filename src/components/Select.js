import React, { Component } from "react";
import { CountryContext } from "../Context";
import StyledSelect from "../styles/StyledSelect";

export default class Select extends Component {
	static contextType = CountryContext;

	state = { isOpen: false, label: "Filter by Region" };

	openToggleHandler = () => {
		this.setState(prev => ({ isOpen: !prev.isOpen }));
	};

	callbackLabel = item => {
		this.context.filterRender(item);
		this.openToggleHandler();
		console.log("callback label ran");
	};

	labelChangeHandler = item => {
		if (item === "All") {
			this.setState({ label: "Filter by Region" }, () => {
				this.callbackLabel(this.state.label);
			});
		} else {
			this.setState({ label: item }, () => {
				this.callbackLabel(this.state.label);
			});
		}
	};

	fetchUnique = (items, type) => [...new Set(items.map(item => item[type]))];

	render() {
		const regions = this.fetchUnique(this.context.countries, "region");
		regions.sort();
		const filterList = ["All", ...regions].filter(item => item !== "");
		const { isOpen, label } = this.state;
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
							onClick={() => {
								this.labelChangeHandler(item);
							}}>
							{item}
						</li>
					))}
				</ul>
			</StyledSelect>
		);
	}
}

// import React, { useState, useEffect, useContext } from "react";
// import { CountryContext } from "../Context";
// import StyledSelect from "../styles/StyledSelect";

// const Select = () => {
// 	const value = useContext(CountryContext);

// 	//states
// 	const [isOpen, setIsOpen] = useState(false);
// 	const [label, setLabel] = useState("Filter by Region");

// 	const filterRender = value.filterRender;

// 	useEffect(() => {
// 		filterRender(label);
// 	}, [filterRender, label]);

// 	//handlers
// 	const openToggleHandler = () => {
// 		setIsOpen(prev => !prev);
// 	};

// 	const labelChangeHandler = item => {
// 		if (item === "All") {
// 			setLabel("Filter by Region");
// 		} else {
// 			setLabel(item);
// 		}
// 		openToggleHandler();
// 	};

// 	//utility
// 	const fetchUnique = (items, type) => [
// 		...new Set(items.map(item => item[type]))
// 	];

// 	const regions = fetchUnique(value.countries, "region");
// 	regions.sort();
// 	const filterList = ["All", ...regions].filter(item => item !== "");

// 	return (
// 		<StyledSelect>
// 			<button onClick={() => openToggleHandler()}>
// 				{label}
// 				<i
// 					className={
// 						isOpen ? "fas fa-chevron-up" : "fas fa-chevron-down"
// 					}
// 				/>
// 			</button>

// 			<ul className={isOpen ? "options" : "options hidden"}>
// 				{filterList.map(item => (
// 					<li
// 						key={item}
// 						value={item}
// 						className='option'
// 						onClick={() => {
// 							labelChangeHandler(item);
// 						}}>
// 						{item}
// 					</li>
// 				))}
// 			</ul>
// 			<input
// 				type='hidden'
// 				name='filterBy'
// 				value={label}
// 				onChange={value.filterRender}
// 			/>
// 		</StyledSelect>
// 	);
// };

// export default Select;
