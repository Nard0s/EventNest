import React from 'react'
import "./Event.css"
import Navbar from '../components/navBar/Navbar'
import SearchBar from '../components/SearchBar/SearchBar'

const Event = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">

        <div className="top">
            <h1>Events</h1>
            <div className="search">
              <SearchBar/>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Event
