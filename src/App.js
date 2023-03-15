import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import ProductEdit from "./components/ProductEdit";

function App() {
	//Global
	console.log("app");

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

	// useEffect(() => {
	// 	const getProducts = async () => {
	// 		const productsFromJSON = await fetchProducts();
	//     console.log(productsFromJSON);
	// 		setProducts(productsFromJSON);
	// 	};
	// 	getProducts();
	// }, []);

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

	//Delete
	const deleteProduct = (id) => {
		setProducts(products.filter((product) => product.id !== id));
	};
	// const deleteProduct = async (id) => {
	//   await fetch(`./products.json/${id}`, {
	//     method: 'DELETE',
	//   })
	//   //console.log(id)
	//   setTasks(tasks.filter((task) => task.id !== id))
	// }

	// function ProductDetailPage({ match }) {
	//   const [item, setItem] = useState(null);

	//   useEffect(() => {
	//     axios.get(`/api/items/${match.params.id}`)
	//       .then(response => setItem(response.data))
	//       .catch(error => console.error(error));
	//   }, [match.params.id]);

	//   if (!item) {
	//     return <div>Loading...</div>;
	//   }

	//   return (
	//     <div>
	//       <h1>{item.name}</h1>
	//       <p>{item.description}</p>
	//     </div>
	//   );
	// }
  // console.log(products.find((p) => p.id === 1));

	return (
		<BrowserRouter>
			<Header title={"Welcome to Target Canada"} />
			<Routes>
				<Route path="/" exact element={<Home />} />
        <Route path="/product-create" element={<AddProduct />} />
				<Route
					path="/products"
					element={<Products products={products}/>}
				/>
				<Route
					path="/product/:id"
					element={
						<ProductDetail
							products={products} onDelete={deleteProduct}
						/>
					}
				/>
				<Route
					path="/product/:id/edit"
					element={
						<ProductEdit
							products={products}
							onProductUpdate={handleProductUpdate}
						/>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
