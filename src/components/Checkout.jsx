import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import styles from "../css/Checkout.module.css";
import img1 from "../Image/LogoIzq.png";

function Checkout({ handleSubmit }) {
	return (
		<div className={styles.checkoutContainer}>
			<Card
				className="p-4 shadow-lg"
				style={{
					maxWidth: "565px",
					marginBottom: "16rem",
				}}
			>
				<Card.Body className={styles.cardBody}>
					<img
						src={img1}
						alt="Logo de la tienda"
						className="mb-3"
						style={{
							maxWidth: "150px",
							display: "block",
							margin: "0 auto",
						}}
					/>
					<Card.Title className="mb-4 text-center fs-3 text-success">
						Finalizar Compra
					</Card.Title>
					<Form onSubmit={handleSubmit}>
						<Form.Group className="mb-3" controlId="email">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								placeholder="ejemplo@gmail.com"
								required
								defaultValue="ejemplo@gmail.com"
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="name">
							<Form.Label>Nombre</Form.Label>
							<Form.Control
								type="text"
								placeholder="Juan Sánchez"
								required
								defaultValue="Juan Sánchez"
							/>
						</Form.Group>

						<Form.Group className="mb-4" controlId="phone">
							<Form.Label>Teléfono</Form.Label>
							<Form.Control
								type="text"
								placeholder="+59812345678"
								required
								defaultValue="+59812345678"
							/>
						</Form.Group>

						<Button
							variant="success"
							type="submit"
							className="w-100"
						>
							Comprar ahora
						</Button>
					</Form>
				</Card.Body>
			</Card>
		</div>
	);
}

export default Checkout;
