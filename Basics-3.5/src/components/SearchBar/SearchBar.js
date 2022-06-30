import React, { useState } from "react"
import "./SearchBar.css"

const SearchBar = (props) => {

const [searchValue, setSearchValue] = useState('')

const handleInputChange = (event) => {
    setSearchValue(event.target.value)
}

const handleClearClick = () => {
    setSearchValue("")
}

const shouldDisplayButton = searchValue.length > 0 

const filteredProducts = props.products.filter((product) => {
        return product.includes(searchValue)
    })


return (
    <div>
        <input type="text" value={searchValue} onChange={handleInputChange}></input>
        {shouldDisplayButton &&  <button onClick={handleClearClick}>clear</button>}

        {filteredProducts.map((product) => {
            return <li key={product}>{product}</li>
        })}
    
    </div>
)
}

export default SearchBar