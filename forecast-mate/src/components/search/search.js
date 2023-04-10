import React from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import { GEO_API_URL, geoApiOptions } from "../../api";

const hey = {
    control: (provided) => ({
        ...provided,
        backgroundColor: 'transparent',
        margin: '4rem 4rem 0 4rem',
        border: '1px solid black'

    }),
    menu: (provided) => ({
        ...provided,
      
        borderRadius: '5px',
        border: '1px soild rgba(255, 255, 255, 0.3)',
        background:' rgba(0, 0, 0, 0)',
        margin: '0rem 4rem 0 4rem',
       maxWidth:'90vw',
        position:'relative',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.34)'
       
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? '#C0C0C0' : null,
        '&:hover': {
          backgroundColor: '#eee',
        },
      }),
}



const Search = ({ onSearchChange }) => {


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