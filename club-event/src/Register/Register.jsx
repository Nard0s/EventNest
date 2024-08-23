import React from 'react'
import Navbar from '../components/navBar/Navbar'
import bg from '../components/img/Screenshot 2024-08-16 221225.png'
import './Register.css'
import Blue_button from '../components/Button/Blue_button'
const Register = () => {
  return (
    <div>
        <div className="nav"><Navbar/></div>
      <div className="R_container">
        <div className="register_content">
            <h1>Register</h1>

            <label htmlFor="name" >Full Name</label> <br />
            <input type="text" id='name' name='name' value={''}/><br /><br />

            <label htmlFor="id">ID Number</label><br />
            <input type="text" id='id' name='id' /><br /><br />

            <label htmlFor="dep">Department</label><br />
            <input type="text" id='dep' name='department'/><br /><br />

            <label htmlFor="email">Email</label><br />
            <input type="email" id='email'name='email' />
            
            <div className="btn">
                <Blue_button btn='Submit '/>
            </div>

        </div>

        <div className="img">
            <img src={bg} alt="" />
        </div>

        <div className="blank">

        </div>
      </div>
    </div>
  )
}

export default Register
