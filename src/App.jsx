import styles from "./App.module.scss";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TableContent from "./pages/TableContent";
import Content1 from "./pages/Content1";
import Content2 from "./pages/Content2";
import Content3 from "./pages/Content3";
import Content4 from "./pages/Content4";
import Content5 from "./pages/Content5";
import Conclusion from "./pages/Conclusion";
import Citation from "./pages/Citation";

function App() {
	return (
		<div className={styles.fullscreen}>
			<BrowserRouter>
				<Routes>
					<Route path="gena-finalproject">
						<Route index element={<Home />} />
						<Route path="home" element={<Home />} />
						<Route path="table-of-content" element={<TableContent />} />
						<Route path="1" element={<Content1 />} />
						<Route path="2" element={<Content2 />} />
						<Route path="3" element={<Content3 />} />
						<Route path="4" element={<Content4 />} />
						<Route path="5" element={<Content5 />} />
						<Route path="conclusion" element={<Conclusion />} />
						<Route path="citation" element={<Citation />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
