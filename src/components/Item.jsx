import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import styles from "../css/Item.module.css";
import { Link } from "react-router";

function Item({ item }) {
	return (
		<Col md={6} lg={3}>
			<Card className="mb-4 carta">
				<Card.Img variant="top" src={item.image} />
				<Card.Body>
					<Card.Title>{item.name}</Card.Title>
					<Card.Text>{item.category}</Card.Text>
					<div className={styles.boton}>
						<Button
							as={Link}
							to={`/product/${item.id}`}
							variant="primary"
							className={styles.buton}
						>
							Ver mas
						</Button>
					</div>
				</Card.Body>
			</Card>
		</Col>
	);
}

export default Item;
