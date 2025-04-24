import Button from "react-bootstrap/Button";
import styles from "../css/CartContainer.module.css";
import { Link } from "react-router";

function Cart({ cart, removeProduct, clearCart, total }) {
	return (
		<div className={styles.divCarrito}>
			<h2>Tu carrito:</h2>
			{cart.map((prod) => (
				<div key={prod.id} className={styles.divCartContainer}>
					<img
						src={prod.image}
						alt={prod.name}
						className={styles.img}
					/>
					<div style={{ flex: 1 }}>
						<strong>{prod.name}</strong> <br />
						<span>
							{prod.quantity} x ${prod.price} = $
							{prod.price * prod.quantity}
						</span>
					</div>
					<Button
						variant="danger"
						onClick={() => removeProduct(prod.id)}
						size="sm"
					>
						Eliminar
					</Button>
				</div>
			))}
			<h3 className={styles.total}>Total: ${total.toFixed(2)}</h3>
			<div className={styles.botonesContainer}>
				<Button
					className={styles.botonCheckout}
					as={Link}
					to={`/checkout`}
					variant="success"
				>
					Checkout
				</Button>
				<Button
					className={styles.botonVaciarCarrito}
					variant="warning"
					onClick={clearCart}
				>
					Vaciar carrito
				</Button>
			</div>
		</div>
	);
}

export default Cart;
