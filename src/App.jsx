import "./App.css";
import Navbar from "./components/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";

function App() {
	useEffect(() => {});
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<ItemListContainer />} />
				<Route path="/category/:id" element={<ItemListContainer />} />
				<Route path="/product/:id" element={<ItemDetailContainer />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
