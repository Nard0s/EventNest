import React from 'react'
import './SearchBar.css'
const SearchBar = () => {
  return (
    <div>
      <div className="x">
        <i class="fa fa-search" aria-hidden="true"></i>
        <input type="text" placeholder='search ' />
      </div>
    </div>
  )
}

export default SearchBar
