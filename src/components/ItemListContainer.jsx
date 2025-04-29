import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import { getItems, filterByCategory } from "../firebase/db";

function ItemListContainer() {
	const [items, setItems] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		if (id) {
			filterByCategory(id).then((data) => setItems(data));
		} else {
			getItems().then((data) => setItems(data));
		}
	}, [id]);
	return <ItemList items={items} />;
}

export default ItemListContainer;
