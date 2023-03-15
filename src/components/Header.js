import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import { Link } from 'react-router-dom'

const Header = (props) => {
	const location = useLocation();
	return (
		<header className="header">
			<nav className="navbar navbar-expand-md bg-secondary navbar-light">
				<div className="container">
          <Link to="/"><img src="logo192.png" height="50px"/></Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navmenu"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navmenu">
						<ul className="navbar-nav ms-auto">
							<li className="nav-item">
                <Link to="/products" className="nav-link">
									Nos produits
                </Link>
							</li>
							<li className="nav-item">
                <Link to="/products-create" className="nav-link">
									Gestion inventaire
                </Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className="container">
				<h1>{props.title}</h1>
				{/* {location.pathname === "/" && (
					<Button
						text={props.showAdd ? "Close" : "Add"}
						color={props.showAdd ? "red" : "green"}
						onClick={props.onAdd}
					/>
				)} */}
			</div>
		</header>
	);
};

Header.defaultProps = {
	title: "Amazing new product",
};

Header.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Header;
