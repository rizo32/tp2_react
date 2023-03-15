import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "./SearchBar";

const ProductEdit = ({ products, onUpdate, onProductUpdate, history }) => {
	const { id } = useParams();

	const [product, setProduct] = useState(
		[products.find((product) => product.id === parseInt(id))][0]
	);

  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };




	const onSubmit = (event) => {
		// e.preventDefault();
		// const updatedProduct = products.map((prod) => {
		// 	if (prod.id === parseInt(id)) {
		// 		return { ...prod, ...product };
		// 	} else {
		// 		return prod;
		// 	}
		// });
		// setProduct(updatedProduct);

    event.preventDefault();
    console.log(product)
    const updatedProduct = product;
    onProductUpdate(updatedProduct);
    // history.push(`/products/${id}`);
  };

	const handleValueChange = (event) => {

    const { name, value } = event.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
    }));

    // const propSetter =
    // "Set" +
    // event.target.name.charAt(0).toUpperCase() +
    // event.target.name.slice(1);
    // propSetter(event.target.value);


		// console.log("Set" + event.target.name.charAt(0).toUpperCase() + event.target.name.slice(1));
		// const updatedProduct = {
		// 	...product,
		// 	[event.target.name]: event.target.value,
		// };
		// setProduct(updatedProduct);
		// localStorage.setItem(`product-${id}`, JSON.stringify(updatedProduct));
	};

	return (
		<div className="container text-center pt-4">
			<h3>{product.name}</h3>
			<form onSubmit={onSubmit} className="d-flex flex-column gap-2 pt-2">
				<SearchBar
          type="text"
					value={product.name}
					name="name"
					label="Name"
					onChange={handleValueChange}
				/>
				<SearchBar
          type="text"
					value={product.price}
					name="price"
					label="price"
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
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
};

export default ProductEdit;
