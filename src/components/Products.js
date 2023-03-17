import Product from "./Product";

const Products = ({ products }) => {
	return (
		<ul className="container py-1 d-flex flex-column gap-5 w-50">
			{products.map((product) => (
				<li className="no-bullets">
					<Product key={product.id} product={product} />
				</li>
			))}
		</ul>
	);
};

export default Products;
