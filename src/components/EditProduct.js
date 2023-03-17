import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaCheck } from "react-icons/fa";

const EditProduct = ({ products, onProductUpdate }) => {
	// Récupération de l'identifiant du produit dans l'URL
	const { id } = useParams();
	const navigate = useNavigate();

	// Initialisation du produit avec l'id récupéré de l'URL
	const [product, setProduct] = useState(
		[products.find((product) => product.id === parseInt(id))][0]
	);

	// Mise à jour du produit affiché à chaque changement d'identifiant ou de produits
	useEffect(() => {
		const newProduct = products.find((product) => product.id === parseInt(id));
		if (newProduct) {
			setProduct(newProduct);
		}
	}, [id, products]);

	// Gestion du changement de valeur des champs du formulaire
	const handleValueChange = (event) => {
		const { name, value } = event.target;
		setProduct((prevProduct) => ({
			...prevProduct,
			[name]: value,
		}));
	};

	// Gestion de la soumission du formulaire
	const onSubmit = (event) => {
		event.preventDefault();
		const updatedProduct = product;
		onProductUpdate(updatedProduct);
		navigate("/products");
	};

	return (
		<div className="container py-1 d-flex flex-column gap-5 w-50">
			<form
				onSubmit={onSubmit}
				className="bg-light container border border-info rounded py-4"
			>
				<h3 className="text-center">{product.name}</h3>
				<SearchBar
					type="text"
					value={product.name}
					name="name"
					label="Name"
					onChange={handleValueChange}
				/>
				<SearchBar
					type="number"
					value={product.price}
					name="price"
					label="Price"
					onChange={handleValueChange}
				/>
				<SearchBar
					type="text"
					value={product.description}
					name="description"
					label="Description"
					onChange={handleValueChange}
				/>
				<SearchBar
					type="text"
					value={product.category}
					name="category"
					label="Category"
					onChange={handleValueChange}
				/>
				<div className="text-center">
					<div className="d-flex justify-content-evenly py-3">
						<div className="lead pointer">
							<Link className="text-dark text-decoration-none" to={`/products/${product.id}`}>
								<span>Back </span>
								<FaArrowLeft />
							</Link>
						</div>
						<input className="lead" type="submit" value="Update" />
					</div>
				</div>
			</form>
		</div>
	);
};

export default EditProduct;
