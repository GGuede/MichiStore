import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./MenuHamburContainer.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function MenuHamburguesa() {
	const [show, setShow] = useState(false);
	const [categories, setCategories] = useState([]);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {
		if (show && categories.length === 0) {
			fetch("https://dummyjson.com/products/category-list")
				.then((response) => response.json())
				.then((data) => setCategories(data));
		}
	}, [show]);

	return (
		<>
			<Button
				className={styles.hambur}
				variant="primary"
				onClick={handleShow}
			>
				<i className="bi bi-list fs-1"></i>
			</Button>

			<Offcanvas show={show} onHide={handleClose}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Categorías</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<ul className={styles.listHambur}>
						{categories.map((cat) => (
							<li key={cat}>
								<NavLink
									to={`/category/${cat}`}
									activeClassName="active"
									onClick={handleClose}
								>
									{cat}
								</NavLink>
							</li>
						))}
					</ul>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
}

export default MenuHamburguesa;
