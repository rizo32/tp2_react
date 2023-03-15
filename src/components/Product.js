import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

// const product = products

const Product = ({ product, onDelete }) => {
	return (
		<div>
			<Link to={onDelete ? `/product/${product.id}/edit` : `/product/${product.id}`}>
				<h3>{product.name}</h3>
			</Link>

			{onDelete && (
				<FaTimes
					style={{ color: "red", cursor: "pointer" }}
					onClick={() => onDelete(product.id)}
				/>
			)}
			<li>{product.price}$</li>
			<li>{product.name}</li>
			<li>{product.description}</li>
		</div>
	);
};

export default Product;
