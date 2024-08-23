import React from 'react'
import './Club_page.css'
import Blue_button from '../components/Button/Blue_button'
import Card from '../components/card/Card'
import logo from '../components/img/download.png'
import Navbar from '../components/navBar/Navbar'
const Club_page = () => {
  return (
    <div >
        <div className="Nav">
            <Navbar/>
        </div>

        <div className="top">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="topContent">
                <h1>Club Name</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, officia non? Esse veniam laudantium maxime?</p>
                <hr />
            </div>
            <div className="bBtn">
                <Blue_button padding='7px 12px' btn='Register '/>
            </div>
        </div>

        <div className="events_card">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default Club_page
