import img1 from "../Image/LogoIzq.png";
import CarWidget from "./CarWidget.jsx";
import MenuHamburguesaContainer from "./MenuHamburguesaContainer.jsx";
import { NavLink, Link } from "react-router";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch("https://dummyjson.com/products/category-list")
			.then((res) => res.json())
			.then((cat) => setCategories(cat));
	}, []);

	return (
		<header id="header" className={styles.header}>
			<nav className={styles.navHead}>
				<h1>MichiStore</h1>
				<div className={styles.divNavHead}>
					<MenuHamburguesaContainer />
					<NavLink to="/" as={NavLink}>
						<img src={img1} alt="" className={styles.logo} />
					</NavLink>
					<CarWidget />
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
