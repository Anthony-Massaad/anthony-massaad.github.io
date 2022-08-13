import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import ScrollToTop from "./utils/ScrollToTop";
import Projects from "./Projects";

function App(){
	return (
		<Router>
			<ScrollToTop>
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/about" exact element={<About />} />
					<Route path="/project" exact element={<Projects />} />
					<Route path="*" element={<Home />} />
				</Routes>
			</ScrollToTop>
		</Router>
	);
}

export default App; 