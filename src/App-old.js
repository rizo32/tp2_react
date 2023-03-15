import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import Footer from "./components/Footer";
import About from "./components/Home";

function App() {
	//Global

	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			const productsFromServer = await fetchProducts();
			setProducts(productsFromServer);
		};
		getProducts();
		// fetchProducts();
	}, []);

	// On pourrait le laisser directement dans le useEffect, mais on est plus flexible comme ça
	const fetchProducts = async () => {
		const res = await fetch("./db.json");
		const data = await res.json();
		//console.log(data)
		return data;
    // setData(json);
	};

	const fetchProduct = async (id) => {
		const res = await fetch(`http://localhost:5000/products/${id}`);
		const data = await res.json();
		//console.log(data)
		return data;
	};

	//Delete
	const deleteProduct = async (id) => {
		await fetch(`http://localhost:5000/products/${id}`, {
			method: "DELETE",
		});
		//console.log(id)
		setProducts(products.filter((task) => task.id !== id));
	};

	//Add
	const addProduct = async (task) => {
		const res = await fetch("http://localhost:5000/products", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(task),
		});
		//console.log(task)
		//const id = Math.floor(Math.random() * 1000)
		//const newProduct = {id, ...task}
		//console.log(newProduct)
		const newProduct = await res.json();
		setProducts([...products, newProduct]);
	};

	//toggle Form

	const [showAddProduct, setShowAddProduct] = useState(false);

	return (
		<BrowserRouter>
			<Header
				onAdd={() => setShowAddProduct(!showAddProduct)}
				showAdd={showAddProduct}
			/>

			{showAddProduct && <AddProduct onAdd={addProduct} />}
			{products.length > 0 ? (
				<Routes>
					<Route
						path="/"
						element={
							<Products
								products={products}
								onDeleteMany={deleteProduct}
							/>
						}
					/>
				</Routes>
			) : (
				"No products"
			)}
			<Routes>
				<Route path="/about" element={<About />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
