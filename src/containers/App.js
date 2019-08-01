import React from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CountryConsumer } from "../Context";
import MainPage from "../pages/MainPage";
import DetailsPage from "../pages/DetailsPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlobalStyle from "../styles/GlobalStyle";

function App() {
	const themeDark = {
		elements: "hsl(209, 23%, 22%)",
		background: "hsl(207, 26%, 17%)",
		text: "hsl(0, 0%, 100%)",
		placeholder: "hsl(0, 0%, 52%)"
	};

	const themeLight = {
		elements: "hsl(0, 0%, 100%)",
		background: "hsl(0, 0%, 98%)",
		text: "hsl(200, 15%, 8%)",
		placeholder: "hsl(0, 0%, 52%)"
	};

	return (
		<CountryConsumer>
			{value => (
				<ThemeProvider theme={value.darkMode ? themeDark : themeLight}>
					<>
						<Navbar />
						<Switch>
							<Route exact path='/' component={MainPage} />
							<Route
								exact
								path='/:country'
								component={DetailsPage}
							/>
						</Switch>
						<Footer />
						<GlobalStyle />
					</>
				</ThemeProvider>
			)}
		</CountryConsumer>
	);
}

export default App;
