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
	//Global

	const [products, setProducts] = useState([]);

	const handleProductUpdate = (updatedProduct) => {
		const updatedProducts = products.map((product) =>
			product.id === updatedProduct.id ? updatedProduct : product
		);
		setProducts(updatedProducts);
	};

	useEffect(() => {
		const fetchProduct = async () => {
			const res = await fetch(`http://localhost:5000/products`);
			const products = await res.json();
			console.log(products);
			setProducts(products);
		};
		fetchProduct();
	}, []);

	// Delete
	const deleteProduct = async (id) => {
    await fetch(`http://localhost:5000/products/${id}`, {
      method: 'DELETE',
    })
		setProducts(products.filter((product) => product.id !== id));
	};

	// Add
	const onProductAdd = async (product) => {
    const res = await fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(product)
    })
		// Spread operator pour créer un nouvel array avec les produits existants et le nouveau produit
		const newProduct = await res.json();
    const updatedProducts = [...products, newProduct];
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
