import { useState } from "react";

const SearchBar = (props) => {
	const [searchValue, setSearchValue] = useState(props.value);

	const handleInputChange = (event) => {
		setSearchValue(event.target.value);
    if (props.onChange) {
      props.onChange(event);
    }
	};

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

SearchBar.defaultProps = {
	isRequired: "false"
};

SearchBar.defaultProps = {
  placeholder: ""
}

export default SearchBar;