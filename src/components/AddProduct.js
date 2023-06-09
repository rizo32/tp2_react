import { useState } from "react";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";

const AddProduct = ({ onProductAdd }) => {
	// Initialisation du produit
	const [newProduct, setNewProduct] = useState(false);

	const handleValueChange = (event) => {
		const { name, value } = event.target;
		setNewProduct((prevProduct) => ({
			...prevProduct,
			[name]: value,
		}));
	};

	const navigate = useNavigate();

	// Gestion de la soumission du formulaire
	const onSubmit = (event) => {
		event.preventDefault();
		onProductAdd(newProduct);
		setNewProduct({
			name: "",
			price: "",
			description: "",
			category: "",
		});
		navigate("/products");
	};

	return (
		<div className="container py-1 d-flex flex-column gap-5 w-50">
			<form onSubmit={onSubmit} className="bg-light container border border-info rounded py-4">
			<h3 className="text-center">Add to inventory</h3>
				<SearchBar
					type="text"
					value={newProduct.name}
					onChange={handleValueChange}
					placeholder="ex. thingy"
					name="name"
					label="Name"
          isRequired={true}
				/>
        <SearchBar
          type="text"
          value={newProduct.category}
          onChange={handleValueChange}
          placeholder="ex. Laptop"
          name="category"
          label="Category"
          isRequired={true}
        />
				<SearchBar
					type="number"
					value={newProduct.price}
					onChange={handleValueChange}
					placeholder="ex. 99.99$"
					name="price"
					label="Price"
          isRequired={true}
				/>
				<SearchBar
					type="text"
					value={newProduct.description}
					onChange={handleValueChange}
					placeholder="ex. blabla"
					name="description"
					label="Description"
				/>
				<div className="d-flex justify-content-evenly py-3">
					<div className="lead pointer">
						<Link
							className="text-dark text-decoration-none"
							to={`/products`}
						>
							<span>Back </span>
							<FaArrowLeft />
						</Link>
					</div>
					<input className="lead" type="submit" value="Create" />
				</div>
			</form>
		</div>
	);
};

export default AddProduct;
