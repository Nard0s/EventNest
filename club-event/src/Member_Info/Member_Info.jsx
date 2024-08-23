import React from 'react'
import './Member_Info.css'
import Navbar from '../components/navBar/Navbar'
const Member_Info = () => {
  return (
    <div>
        <div className="nav"><Navbar/></div>
        <div className='info_body'>
            <h1>Members <span>Information</span> </h1>
            <div className="table">
                <tr>
                    <th id='no'> No.</th>
                    <th>Full Name</th>
                    <th>Department</th>
                    <th>Id Number</th>
                    <th>Email</th>
                </tr>
                <tr>
                    <td id='no'>1</td>
                    <td>abebe</td>
                    <td>cs</td>
                    <td>dbu12345</td>
                    <td>abebe@gmail.com</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>abehvfsehgiuewjhbe</td>
                    <td>cs</td>
                    <td>dbu12345</td>
                    <td>abebe@gmail.com</td>
                </tr>
            </div>
        </div>
    </div>
  )
}

export default Member_Info
