import {
	getFirestore,
	collection,
	getDocs,
	query,
	where,
	doc,
	getDoc,
	addDoc,
} from "firebase/firestore";
import { app } from "./config";
export const db = getFirestore(app);
export const getItems = async () => {
	const querySnapshot = await getDocs(collection(db, "products"));
	const items = [];
	querySnapshot.forEach((doc) => {
		items.push({ id: doc.id, ...doc.data() });
	});
	return items;
};
export const filterByCategory = async (category) => {
	const q = query(
		collection(db, "products"),
		where("category", "==", category)
	);

	const querySnapshot = await getDocs(q);
	const filterItems = [];
	querySnapshot.forEach((doc) => {
		console.log(doc.data());
		filterItems.push({ id: doc.id, ...doc.data() });
	});
	return filterItems;
};

export const getItem = async (id) => {
	const docRef = doc(db, "products", id);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		return { id: docSnap.id, ...docSnap.data() };
	} else {
		console.log("No such document!");
		return null;
	}
};

export const createOrder = async (order) => {
	try {
		const docRef = await addDoc(collection(db, "orders"), order);
		return docRef.id;
	} catch (e) {
		console.error("Error adding document: ", e);
	}
};
