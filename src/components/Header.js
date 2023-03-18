import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom'

// Le composant Header affiche la barre de navigation ainsi que le titre de la page
const Header = (props) => {
  // On récupère la location grâce à useLocation() pour pouvoir changer la page active dans la barre de navigation
	const location = useLocation();
	return (
		<header className="header">
			<nav className="navbar navbar-expand-md bg-info navbar-light">
				<div className="container">
          <Link to="/"><img src="target-logo.png" height="50px"/></Link>
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
            <li className={`nav-item px-3 ${location.pathname === '/products' ? 'fw-bold' : ''}`}>
              <Link to="/products" className="nav-link text-light">
									Our products
                </Link>
							</li>
              <li className={`nav-item px-3 ${location.pathname === '/product-create' ? 'fw-bold' : ''}`}>
                <Link to="/product-create" className="nav-link text-light">
									Inventory mgmt
                </Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className="container py-3 text-center">
				<h1>{props.title}</h1>
			</div>
		</header>
	);
};

// Validation de la propriété 'title' en tant que chaîne de caractères obligatoire
Header.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Header;
