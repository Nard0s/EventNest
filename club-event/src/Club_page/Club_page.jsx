import React from 'react'
import './Club_page.css'
import Blue_button from '../components/Button/Blue_button'
import Card from '../components/card/Card'
import logo from '../components/img/download.png'
import Navbar from '../components/navBar/Navbar'
const Event = () => {
  return (
    <div >
       {/* <div className="top">
            <div className="nav"><Navbar/></div>
            <div className="btn"><Blue_button btn='Register '/></div>
        </div> */}

        <div className="nav"><Navbar/></div>
        <div className="club">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="content">
                <div className="name">
                    <h1>Club Name</h1>
                </div>
                <div className="description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente accusantium nemo tempore laudantium culpa ab!
                    </p>
                    <hr />
                </div>
            </div>
            <div className="btn"><Blue_button btn='Register '/></div>
        </div>
{/* >>>>>>>>>>>>>>>>>>CARDS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
        <div className="post">
            <Card club_name='Tech Tonic' description='upcoming coming event'/>
            <Card club_name='Tech Tonic' description='upcoming coming event'/>
            <Card club_name='Tech Tonic' description='upcoming coming event'/>
            <Card club_name='Tech Tonic' description='upcoming coming event'/>
            <Card club_name='Tech Tonic' description='upcoming coming event'/>
        </div>
      
    </div>
  )
}

export default Event
