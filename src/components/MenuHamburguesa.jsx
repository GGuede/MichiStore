import Nav from "react-bootstrap/Nav";
import { useEffect, useState } from "react";

function MenuHamburguesa() {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch("https://dummyjson.com/products/category-list")
			.then((res) => res.json())
			.then((cat) => setCategories(cat));
	}, []);

	{
		categories.map((cat) => (
			<Nav.Link href="" key={cat}>
				{cat}
			</Nav.Link>
		));
	}
}

export default MenuHamburguesa;
