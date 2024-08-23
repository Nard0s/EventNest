import React from 'react'
import './SearchBar.css'
const SearchBar = (props) => {
  return (
    <div>
      <div className="search" style={{width:props.width}}>
        <i class="fa fa-search" aria-hidden="true"></i>
        <input type="text" placeholder='search here...... ' />
      </div>
    </div>
  )
}

export default SearchBar
