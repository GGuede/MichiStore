import { useState } from "react";
import MenuHamburguesa from "./MenuHamburguesa";

function MenuHamburguesaContainer({ categories }) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<MenuHamburguesa
			categories={categories}
			handleClose={handleClose}
			handleShow={handleShow}
			show={show}
		/>
	);
}

export default MenuHamburguesaContainer;
