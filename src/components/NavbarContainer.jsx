import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/db";

function NavbarContainer() {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const querySnapshot = await getDocs(collection(db, "products"));
				const allCategories = querySnapshot.docs.map(
					(doc) => doc.data().category
				);
				const uniqueCategories = [...new Set(allCategories)];
				setCategories(uniqueCategories);
			} catch (error) {
				console.error("Error al obtener categorías:", error);
			}
		};

		fetchCategories();
	}, []);

	return <Navbar categories={categories} />;
}

export default NavbarContainer;
