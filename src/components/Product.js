import { FaTimes, FaWrench, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import ColoredLine from "./ColoredLine";

// const product = products

const Product = ({ product, onDelete }) => {
	return (
		<div className="bg-light container border border-info rounded py-4">
			<div className="text-center">
				{onDelete ? (
					<h3>{product.name}</h3>
				) : (
					<Link to={`${product.id}`}>
						<h3>{product.name}</h3>
					</Link>
				)}
			</div>
			<li className="no-bullets p-2">
				<b>Category: </b>
				{product.category}
			</li>
			<li className="no-bullets p-2">
				<b>Price: </b>
				{product.price}$
			</li>
			<li className="no-bullets p-2">
				<b>Description: </b>
				{product.description}
			</li>
      {/* Si onDelete existe, c'est parce qu'on vient de EditProduct, et pas la page liste Products */}
			{onDelete && (
				<li className="no-bullets p-2">
					<ColoredLine color="red" />
					<div className="d-flex justify-content-evenly">
          <div className="lead pointer">
							<Link
								className="text-dark text-decoration-none"
								to={`/products`}
							>
								<span>Back </span>
								<FaArrowLeft />
							</Link>
						</div>
						<div className="lead pointer">
							<Link
								className="text-dark text-decoration-none"
								to={`/product-edit/${product.id}`}
							>
								<span>Update </span>
								<FaWrench />
							</Link>
						</div>
            <div className="lead pointer" onClick={() => onDelete(product.id)}>
							<span>Delete </span>
							<FaTimes className="text-danger" />
						</div>


					</div>
				</li>
			)}
		</div>
	);
};

export default Product;
