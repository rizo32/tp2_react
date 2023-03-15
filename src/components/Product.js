import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";


const Product = ({ product, onDelete }) => {
	return (
		<Link to={ `/product/${product.id}/edit` }>
			<h3>
				{product.name}
				<FaTimes
					style={{ color: "red", cursor: "pointer" }}
					onClick={() => onDelete(product.id)}
				/></h3>
				<li>{product.price}$</li>
				<li>{product.name}</li>
				<li>{product.description}</li>
		</Link>
	);
};

export default Product;
