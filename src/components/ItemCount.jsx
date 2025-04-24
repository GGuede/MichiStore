import styles from "../css/ItemCount.module.css";

function ItemCount({ count, handleAdd, handleSub, handleAddProduct }) {
	return (
		<div>
			<p>{count}</p>
			<div className={styles.divCount}>
				<button className={styles.buttonMas} onClick={handleAdd}>
					+
				</button>
				<button
					className={styles.buttonMenos}
					onClick={handleSub}
					disabled={count === 1}
				>
					-
				</button>
				<button
					className={styles.button}
					onClick={handleAddProduct}
					disabled={count === 0}
				>
					Agregar al carrito
				</button>
			</div>
		</div>
	);
}

export default ItemCount;
