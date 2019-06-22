import React from "react";

var SearchBar = (props) => {
  return (
    <div className = "searchbar">
    <form>
      <input type="text" placeholder="Search..." value={props.searchTerm} onChange={props.handleInputChange} name="searchTerm"/>
      <input type="submit" onClick={props.handleSubmit} />
    </form>
    </div>
  )
}

export default SearchBar;