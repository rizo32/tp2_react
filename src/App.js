import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

function App() {
	// Déclaration du state 'products' qui contient tous les produits
	const [products, setProducts] = useState([]);

	// Hook useEffect pour récupérer tous les produits lors du chargement de la page
	useEffect(() => {
		const fetchProduct = async () => {
			const res = await fetch(`http://localhost:5000/products`);
			const products = await res.json();
			setProducts(products);
		};
		fetchProduct();
	}, []);

	// Add
	const onProductAdd = async (product) => {
		const res = await fetch("http://localhost:5000/products", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(product),
		});
		// On crée un nouvel array de produits en ajoutant le nouveau produit
		const newProduct = await res.json();
		const updatedProducts = [...products, newProduct];
		setProducts(updatedProducts);
	};

	// Delete
	const deleteProduct = async (id) => {
		await fetch(`http://localhost:5000/products/${id}`, {
			method: "DELETE",
		});
		// On crée un nouvel array de produits en filtrant le produit supprimé
		setProducts(products.filter((product) => product.id !== id));
	};

	// Edit
	const handleProductUpdate = async (updatedProduct) => {
		const res = await fetch(
			`http://localhost:5000/products/${updatedProduct.id}`,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(updatedProduct),
			}
		);
		const updatedProductFromServer = await res.json();

		// On crée un nouvel array de produits en mettant à jour le produit modifié
		const updatedProducts = products.map((product) =>
			product.id === updatedProductFromServer.id
				? updatedProductFromServer
				: product
		);
		setProducts(updatedProducts);
	};

	return (
		<BrowserRouter>
			<Header title={"Welcome to Target Canada"} />
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route
					path="/product-create"
					element={<AddProduct onProductAdd={onProductAdd} />}
				/>
				<Route path="/products" element={<Products products={products} />} />
				<Route
					path="/products/:id"
					element={
						<ProductDetail products={products} onDelete={deleteProduct} />
					}
				/>
				<Route
					path="/product-edit/:id"
					element={
						<EditProduct
							products={products}
							onProductUpdate={handleProductUpdate}
						/>
					}
				/>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
