import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styles from "../css/CartContainer.module.css";
import Cart from "./Cart";

function CartContainer() {
	const { cart, removeProduct, clearCart } = useContext(CartContext);
	const total = cart.reduce(
		(acc, prod) => acc + prod.price * prod.quantity,
		0
	);

	if (cart.length === 0) {
		return (
			<div className={styles.divNoTienesProductos}>
				<h2>No tienes productos en el carrito</h2>
			</div>
		);
	}

	return (
		<Cart
			cart={cart}
			removeProduct={removeProduct}
			clearCart={clearCart}
			total={total}
		/>
	);
}

export default CartContainer;
