import React from "react";
import {HashRouter, Route, Routes} from 'react-router-dom';

import Home from "./Home";
import About from "./About";
import ScrollToTop from "./utils/ScrollToTop";
import Projects from "./Projects";

function App(){
	return (
		<HashRouter>
			<ScrollToTop>
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/project" element={<Projects />} />
					<Route path="*" element={<Home />} />
				</Routes>
			</ScrollToTop>
		</HashRouter>
	);
}

export default App; 