import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import styles from "./Item.module.css";
import { Link } from "react-router";

function Item({ item }) {
	return (
		<Col md={6} lg={3}>
			<Card className="mb-4 carta">
				<Card.Img variant="top" src={item.thumbnail} />
				<Card.Body>
					<Card.Title>{item.title}</Card.Title>
					<Card.Text>{item.category}</Card.Text>
					<div className={styles.boton} boton>
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
