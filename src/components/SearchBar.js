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
		<div>
			<label id="name">{props.label}</label>
			<input
				name={props.name}
				type="text"
				value={searchValue}
				onChange={handleInputChange}
			/>
		</div>
	);
};
export default SearchBar;
