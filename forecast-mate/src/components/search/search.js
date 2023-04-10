import React from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import { GEO_API_URL, geoApiOptions } from "../../api";


const Search = ({ onSearchChange }) => {
    const hey={
        backgroundColor:'red',
        margin:'4rem'
    }

    const [search, setSearch] = React.useState(null);

    const loadOptions = async (inputValue) => {
        const response = await fetch(
            `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
            geoApiOptions
        );
        const response_1 = await response.json();
        return {
            options: response_1.data.map((city) => {
                return {
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name}, ${city.countryCode}`,
                };
            }),
        };
      };

    const handleChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData)
    }
    return (
        <AsyncPaginate
            styles={hey}
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleChange}
            loadOptions={loadOptions} />
    )
}
export default Search