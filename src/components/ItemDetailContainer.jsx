import { useParams } from "react-router";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { getItem } from "../firebase/db";

function ItemDetailContainer() {
	const [detail, setDetail] = useState();
	const { id } = useParams();

	useEffect(() => {
		getItem(id).then((item) => setDetail(item));
	}, [id]);

	return (
		<div>
			<ItemDetail detail={detail} />
		</div>
	);
}

export default ItemDetailContainer;
