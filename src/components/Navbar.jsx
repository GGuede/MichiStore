import img1 from "../Image/LogoIzq.png";
import CarWidget from "./CarWidget.jsx";
import MenuHamburguesaContainer from "./MenuHamburguesaContainer.jsx";
import { NavLink } from "react-router";
import styles from "../css/Navbar.module.css";

function Navbar({ categories }) {
	return (
		<header id="header" className={styles.header}>
			<nav className={styles.navHead}>
				<h1>MichiStore</h1>
				<div className={styles.divNavHead}>
					<MenuHamburguesaContainer categories={categories} />
					<NavLink to="/">
						<img src={img1} alt="" className={styles.logo} />
					</NavLink>
					<CarWidget />
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
