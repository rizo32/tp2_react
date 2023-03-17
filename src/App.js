import { useState } from "react";
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

	const [products, setProducts] = useState([
		{
			id: 1,
			name: "Galaxy S23",
			price: 999.99,
			description: "8gb ram, quad-core CPU",
			category: "phone",
		},
		{
			id: 2,
			name: "Yoga 730",
			price: 1699.99,
			description: "16gb ram, quad-core CPU, 4K display",
			category: "laptop",
		},
		{
			id: 3,
			name: "Legion 5i",
			price: 1399.99,
			description: "16gb ram, octo-core CPU, 1tb SSD",
			category: "desktop",
		},
	]);

	const handleProductUpdate = (updatedProduct) => {
		const updatedProducts = products.map((product) =>
			product.id === updatedProduct.id ? updatedProduct : product
		);
		setProducts(updatedProducts);
	};


	// const fetchProducts = async () => {
	//   console.log("hello");
	// 	const res = await fetch("/data/products-db.json");
	// 	const data = await res.json();
	// 	return data;
	// };

	// const fetchProduct = async (id) => {
	// 	const res = await fetch(`http://localhost:5000/products/${id}`);
	// 	const data = await res.json();
	// 	//console.log(data)
	// 	return data;
	// };

	// //Edit
	// const editProduct = (product) => {
	//   //console.log(task)
	//   const id = Math.floor(Math.random() * 1000)
	//   const newTask = {id, ...task}
	//   //console.log(newTask)
	//   setProducts([...products, newTask])
	// }

	// Delete
	const deleteProduct = (id) => {
		setProducts(products.filter((product) => product.id !== id));
	};

  // Add
  const onProductAdd = (newProduct) => {
    // Use the spread operator to create a new array with the existing products and the new product
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
  };



	return (
		<BrowserRouter>
			<Header title={"Welcome to Target Canada"} />
			<Routes>
				<Route path="/" exact element={<Home />} />
        <Route path="/product-create" element={<AddProduct onProductAdd={onProductAdd}/>} />
				<Route
					path="/products"
					element={<Products products={products}/>}
				/>
				<Route
					path="/products/:id"
					element={
						<ProductDetail
							products={products} onDelete={deleteProduct}
						/>
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
