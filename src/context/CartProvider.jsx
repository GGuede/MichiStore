import { CartContext } from "./CartContext";
import { useState } from "react";

function CartProvider({ children }) {
	const [cart, setCart] = useState([]);

	const addProduct = (newProduct) => {
		setCart((prevCart) => {
			const existingProduct = prevCart.find(
				(item) => item.id === newProduct.id
			);

			if (existingProduct) {
				return prevCart.map((item) =>
					item.id === newProduct.id
						? {
								...item,
								quantity: item.quantity + newProduct.quantity,
						  }
						: item
				);
			} else {
				return [...prevCart, newProduct];
			}
		});
	};

	const removeProduct = (id) => {
		setCart(cart.filter((product) => product.id !== id));
	};

	const clearCart = () => {
		setCart([]);
	};

	const getProductsQuantity = () => {
		const onlyQuantity = cart.map((prod) => Number(prod.quantity) || 0);
		const total = onlyQuantity.reduce((acc, current) => acc + current, 0);
		return total;
	};
	return (
		<CartContext.Provider
			value={{
				addProduct,
				removeProduct,
				clearCart,
				getProductsQuantity,
				cart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export default CartProvider;
