import React from 'react'
import './About.css'
import Navbar from '../components/navBar/Navbar'
import img from '../components/img/Screenshot 2024-08-16 205905.png'
const About = () => {
  return (
    <div className='a_body'>
      <div className="nav"><Navbar/></div>
      <div className="a_container">
        <div className="a_content">
            <div className="a_text">
                <h1>About <span>Us</span></h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et sapiente perferendis totam pariatur doloremque obcaecati nemo aliquid, minima nostrum assumenda a placeat velit ad necessitatibus, quidem quos iste quisquam illum!orem, ipsum dolor sit amet consectetur adipisicing elit. Et sapiente perferendis totam pariatur doloremque obcaecati nemo aliquid, minima nostrum assumenda a placeat velit ad necessitatibus, quidem quos iste quisquam illum</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et sapiente perferendis totam pariatur doloremque obcaecati nemo aliquid, minima nostrum assumenda a placeat velit ad necessitatibus, quidem quos iste quisquam illum!orem, ipsum dolor sit amet consectetur adipisicing elit. Et sapiente perferendis totam pariatur doloremque obcaecati nemo aliquid, minima nostrum assumenda a placeat velit ad necessitatibus, quidem quos iste quisquam illum</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et sapiente perferendis totam pariatur doloremque obcaecati nemo aliquid, minima nostrum assumenda a placeat velit ad necessitatibus, quidem quos iste quisquam illum!orem, ipsum dolor sit amet consectetur adipisicing elit. Et sapiente perferendis totam pariatur doloremque obcaecati nemo aliquid, minima nostrum assumenda a placeat velit ad necessitatibus, quidem quos iste quisquam illum</p>
            </div>
                <img src={img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
