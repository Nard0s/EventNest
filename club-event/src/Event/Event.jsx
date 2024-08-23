import React from 'react'
import './Event.css'
import SearchBar from '../components/SearchBar/SearchBar'
import Navbar from '../components/navBar/Navbar'
import Card from '../components/card/Card'

const Event = () => {
  return (
    <div>
      <div className="e_container">
        
        <div className="nav">
          <Navbar/>
        </div>

        <div className="e_top">
          <h1>EVENTS</h1>
          <SearchBar width='500px'/>
        </div>

        <hr />
        <div className="e-card">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        
        </div>
      </div>
    </div>
  )
}

export default Event

