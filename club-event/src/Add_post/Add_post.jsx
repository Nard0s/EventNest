import React from 'react'
import './Add_post.css'
import Navbar from '../components/navBar/Navbar'
import Green_button from '../components/Button/Green_button'




const Add_post = () => {
  return (
    <div className='body'>
        <div className="nav"><Navbar/></div>
        <div className="add">
            <h1>Add <span>Post</span></h1>

            <div className="addPost">
                <label className='text' htmlFor="title">Title  </label>
                <input type="text" id='title' name='title'/> <br />
                
                <label className='text' htmlFor="desc">Description </label>  
                <textarea name="Description" id="desc" cols="30" rows="3"></textarea><br />
                
                <label className='text' htmlFor="location">Location </label>
                <input type="text" id='location' /><br />

                <label className='text' htmlFor="date">Date </label>
                <input type="date" name="date" id="date" /><br />

                <label className='text' htmlFor="time">Time </label>
                <input type="time" name="time" id="time" /><br />

                <label className='text' htmlFor="img">Add image</label>
                <input type="image" src="" alt="Event poster" />
            <div className="p_btn"><Green_button btn="Post " padding="5px 15px"/></div>
            </div>
        </div>
    </div>
  )
}

export default Add_post
