import React from "react"

var AddMovie = (props) => {
  return (
  <div className = "addmovie">
    <form onSubmit={props.onSubmit}>
      <input type="text" placeholder="Add movie title here" onChange={(e) => props.handleInputChange(e)} name="insertMovie"/>
      <input type="submit" value="Add" />
    </form>
  </div>
  )
}

export default AddMovie