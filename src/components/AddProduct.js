import { useState } from "react";
import SearchBar from "./SearchBar";


const AddProduct = ({ onAdd }) => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	const [category, setCategory] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();
		if (!name) {
			alert("Where's the product?");
			return;
		}
		onAdd({ name, description, price, category });
		setName("");
		setDescription("");
		setPrice("");
		setCategory("");
	};
	return (
		<div className="container text-center pt-4">
			<h3>Ajout dans l'inventaire</h3>
			<form onSubmit={onSubmit} className="d-flex flex-column gap-2 pt-2">
				<SearchBar
					type="text"
					placeholder="What's my name?"
					name="name"
					label="Name"
				/>
				<SearchBar
					type="text"
					placeholder="What's my price?"
					name="price"
					label="price"
				/>
				<SearchBar
					type="text"
					placeholder="What's my description?"
					name="description"
					label="Description"
				/>
				<SearchBar
					type="text"
					placeholder="What's my category?"
					name="category"
					label="Category"
				/>
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
};

export default AddProduct;
