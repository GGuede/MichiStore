import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";
import ItemCount from "./ItemCount";

function ItemCountContainer({ product }) {
	const [count, setCount] = useState(1);
	const { addProduct } = useContext(CartContext);

	const handleSub = () => {
		if (count > 0) setCount(count - 1);
	};

	const handleAdd = () => {
		setCount(count + 1);
	};

	const handleAddProduct = () => {
		if (count > 0) {
			addProduct({ ...product, quantity: count });
			toast.success(`${product.name} agregado al carrito (${count})`);
		}
	};

	return (
		<ItemCount
			count={count}
			handleAdd={handleAdd}
			handleSub={handleSub}
			handleAddProduct={handleAddProduct}
		/>
	);
}

export default ItemCountContainer;
