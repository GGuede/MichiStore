import { NavLink } from "react-router";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "../css/MenuHamburguesa.module.css";

function MenuHamburguesa({ categories, handleShow, handleClose, show }) {
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
									className={({ isActive }) =>
										isActive ? styles.activeLink : ""
									}
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
