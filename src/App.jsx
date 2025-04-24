import "./App.css";
import ItemListContainer from "./components/ItemListContainer.jsx";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import CartContainer from "./components/CartContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckoutContainer from "./components/CheckoutContainer.jsx";
import NavbarContainer from "./components/NavbarContainer.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";
function App() {
	useEffect(() => {});
	return (
		<BrowserRouter>
			<NavbarContainer />
			<Routes>
				<Route path="/" element={<ItemListContainer />} />
				<Route path="/category/:id" element={<ItemListContainer />} />
				<Route path="/product/:id" element={<ItemDetailContainer />} />
				<Route path="/cart" element={<CartContainer />} />
				<Route path="/checkout" element={<CheckoutContainer />} />
			</Routes>
			<ToastContainer
				position="bottom-right"
				autoClose={3000}
				hideProgressBar={true}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</BrowserRouter>
	);
}

export default App;
