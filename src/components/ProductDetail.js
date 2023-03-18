import { useParams, useNavigate } from "react-router-dom";
import Product from "./Product";

const ProductDetail = ({ products, onDelete }) => {
	const { id } = useParams();
	const navigate = useNavigate();

  // Fonction de suppression
	const handleProductDeleted = (id) => {
		onDelete(id);
    // redirection
		navigate("/products");
	};

  // trouver le produit correspondant à l'ID dans l'URL
	const product = products.find((p) => p.id === parseInt(id));

	return (
		<div className="container py-1 d-flex flex-column gap-5 w-50">
			<Product product={product} onDelete={handleProductDeleted} />
		</div>
	);
};

export default ProductDetail;
