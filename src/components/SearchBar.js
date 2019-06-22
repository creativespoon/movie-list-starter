import React from "react";

var SearchBar = (props) => {
  return (
    <div className = "searchbar">
    <form>
      <input type="text" placeholder="Search..." value={props.searchTerm} onChange={props.handleInputChange} name="searchTerm"/>
    </form>
    </div>
  )
}

export default SearchBar;