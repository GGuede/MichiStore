import { Card } from "react-bootstrap";
import "./ItemDetails.module.css";
import styles from "./ItemDetails.module.css";
import ItemCount from "./ItemCount";

function ItemDetail({ detail }) {
	return (
		<div className={styles.container}>
			<Card className={styles.card}>
				<Card.Img
					variant="top"
					src={detail?.thumbnail}
					className={styles.image}
				/>
				<Card.Body>
					<Card.Title className={styles.title}>
						{detail?.title}
					</Card.Title>
					<Card.Text className={styles.text}>
						{detail?.category}
					</Card.Text>
					<button className={styles.button}>
						Agregar al carrito
					</button>
					<ItemCount />
				</Card.Body>
			</Card>
		</div>
	);
}
export default ItemDetail;
