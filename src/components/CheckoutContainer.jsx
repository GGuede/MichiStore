import Checkout from "./Checkout";
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router";
import { serverTimestamp } from "firebase/firestore";
import { createOrder } from "../firebase/db";

function CheckoutContainer() {
	const { clearCart, cart } = useContext(CartContext);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form[0].value;
		const name = form[1].value;
		const phone = form[2].value;

		const order = {
			items: cart,
			user: { name, email, phone },
			date: serverTimestamp(),
		};

		const id = await createOrder(order);

		if (id) {
			withReactContent(Swal).fire({
				icon: "success",
				title: `¡Gracias por tu compra!`,
				text: `El ID de tu orden es: ${id}`,
				confirmButtonColor: "#198754",
			});
			clearCart();
			navigate("/");
		} else {
			withReactContent(Swal).fire({
				icon: "error",
				title: `Hubo un error`,
				text: `Intenta nuevamente.`,
			});
		}
	};

	return <Checkout handleSubmit={handleSubmit} />;
}

export default CheckoutContainer;
