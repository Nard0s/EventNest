import React from 'react'
import './Home.css'
import img1 from '../components/img/Screenshot 2024-08-16 205036.png'
import img2 from '../components/img/Screenshot 2024-08-16 205312.png'
import img3 from '../components/img/Screenshot 2024-08-16 221131.png'
import img4 from '../components/img/istockphoto-1392528328-170667a.webp'
import bg from '../components/img/Screenshot 2024-08-16 221225.png'
import Green_button from '../components/Button/Green_button'
import Blue_button from '../components/Button/Blue_button'
import Navbar from '../components/navBar/Navbar'
function Home() {
  return (
    <div>
        <div className="hero" 
        style={{
            }}>

            <div className="nav">
                <Navbar/>
            </div>


            <div className="hero_content">
                <h1>Discover the  <b> Exiting </b>World of <b> University</b> Clubs</h1>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum expedita sit, exercitationem inventore ratione vel.</h3>
            </div>
            <div className="first_btn">
                <Green_button  btn="Explore More "/>
            </div>
        </div>
{/* >>>>>>>>>>>>>>>>>>>>>>>>>2nd>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
        <div className="second_container">
            <div className="content">
                <h2>Join a club and experience Exiting events</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci porro reprehenderit, iusto, iste praesentium voluptas ut officia pariatur, facilis soluta dolorum. Veniam at aperiam ipsum eveniet qui. Illum ad consequatur modi libero velit. Quisquam, commodi.</p>
            </div>
            <div className="img">
                <img src={img1} alt="" />
            </div>
        </div>
{/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>3rd>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
        <h1>Benefits</h1>
        <div className="third_container">
            <div className="first">
               <img src={img4} alt="" />
               <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum architecto dolore ad ab doloremque dolor cupiditate quo impedit nobis obcaecati.</h3> 
            </div>
            <div className="first">
               <img src={img3} alt="" />
               <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum architecto dolore ad ab doloremque dolor cupiditate quo impedit nobis obcaecati.</h3> 
            </div>
            <div className="first">
               <img src={img4} alt="" />
               <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum architecto dolore ad ab doloremque dolor cupiditate quo impedit nobis obcaecati.</h3> 
            </div>
        </div>
        <div className="second_btn">
            <Blue_button btn="See more "/>
        </div>

    <div className="footer">
        <h1>footer???</h1>
    </div>
    </div>
  )
}

export default Home
