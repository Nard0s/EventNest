import React from 'react'
import Navbar from '../components/navBar/Navbar'
import banner from '../components/img/HD-wallpaper-lake-and-city-anime-place-city-pathway-anime-lake.jpg'
import logo from '../components/img/download.png'
import Card from '../components/card/Card'
import './Admin.css'
const Admin = () => {
  return (
    <div>
    <div className="nav">
      <Navbar/>
    </div>


    <div className="a_top">
      
      <div className="banner">
        <img src={banner} alt="" />
      </div>


      <div className="p_content">
        <div className="p_logo">
          <img src={logo} alt="" />
        </div>

        <div className="l_text">
          <h1>Club Name</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, officia non? Esse veniam laudantium maxime?</p>
          <hr />
        </div>
      </div>

    </div>
    <div className="admin_Card">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
    </div>
  )
}

export default Admin
