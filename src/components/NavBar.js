import React from "react";

var NavBar = (props) => {
  return (
    <div className = "navbar">
      <form>
        <input type="text" placeholder="Search..." value={props.value} onChange={props.handleChange}/>
      </form>
    </div>
  )
}

export default NavBar;