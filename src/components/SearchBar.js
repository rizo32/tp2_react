import { useState } from "react";

const SearchBar = (props) => {
	const [searchValue, setSearchValue] = useState(props.value);

  // Fonction qui gère les changements dans l'input
	const handleInputChange = (event) => {
		setSearchValue(event.target.value);
    // Vérifie si la fonction onChange est passée en prop, si oui l'appelle
    if (props.onChange) {
      props.onChange(event);
    }
	};

  // Rendu du composant
	return (
		<div className="no-bullets p-2">
			<label id="name"><b>{props.label}: </b></label>
			<input
				name={props.name}
        placeholder={props.placeholder}
				type={props.type}
				value={searchValue}
				onChange={handleInputChange}
        className="form-control"
        required={props.isRequired}
			/>
		</div>
	);
};

// Valeurs par défaut pour les props non obligatoires
SearchBar.defaultProps = {
	isRequired: "false"
};

SearchBar.defaultProps = {
  placeholder: ""
}

export default SearchBar;