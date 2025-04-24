import { Card } from "react-bootstrap";
import styles from "../css/ItemDetails.module.css";
import ItemCountContainer from "./ItemCountContainer";

function ItemDetail({ detail }) {
	return (
		<div className={styles.container}>
			<Card className={styles.card}>
				<Card.Img
					variant="top"
					src={detail?.image}
					className={styles.image}
				/>
				<Card.Body>
					<Card.Title className={styles.title}>
						{detail?.name}
					</Card.Title>
					<Card.Text className={styles.text}>
						{detail?.category}
					</Card.Text>
					<ItemCountContainer product={detail} />
				</Card.Body>
			</Card>
		</div>
	);
}
export default ItemDetail;
