import { useParams } from "react-router";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import Card from "react-bootstrap/Card";

function ItemDetailContainer() {
	const [detail, setDetail] = useState();
	const { id } = useParams();

	useEffect(() => {
		fetch(`https://dummyjson.com/products/${id}`)
			.then((res) => res.json())
			.then((prod) => setDetail(prod));
	}, [id]);

	return (
		<div>
			<ItemDetail detail={detail} />
		</div>
	);
}

export default ItemDetailContainer;
