// Import necessary libraries
import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";

// Search Component
const Search = ({ onSearchChange }) => {

    // Search State
    const [search, setSearch] = useState(null)

    // Retrieve input values
    const loadOptions = (inputValues) => {
        
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