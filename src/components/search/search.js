// Import necessary libraries
import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { GEO_API_URL, geoApiOptions } from "../../api";

// Search Component
const Search = ({ onSearchChange }) => {

    // Search State
    const [search, setSearch] = useState(null)

    // Retrieve input values
    const loadOptions = (inputValue) => {
        return fetch(
            `${GEO_API_URL}/cities?minPopulation=1000000namePrefix=${inputValue}`, geoApiOptions
        )
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }


    // Handle On Change
    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <AsyncPaginate
            placeholder="Search for city..."
            // Milliseconds to wait before sending a request
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}

// Export Component
export default Search;