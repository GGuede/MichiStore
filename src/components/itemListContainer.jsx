import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";

function ItemListContainer() {
	const [items, setItems] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const products = "https://dummyjson.com/products";
		const productosByCategory = `https://dummyjson.com/products/category/${id}`;

		fetch(id ? productosByCategory : products)
			.then((res) => res.json())
			.then((data) => setItems(data.products))
			.then(console.log);
	}, [id]);
	return <ItemList items={items} />;
}

export default ItemListContainer;
