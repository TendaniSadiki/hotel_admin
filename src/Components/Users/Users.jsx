import React from 'react'
import "../Book/Book.css"
import { CgPen } from "react-icons/cg";
import { CgTrashEmpty } from "react-icons/cg";


function Users() {
  return (
    <div >
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="book">

        <h1 className='bookTitle'>Users</h1>
        <ul className="bookContainer">
          <li className="bookList">
            <p>User ID</p>
            <div className="mappedContent">
              <p>54666446448</p>
            </div>
          </li>
          <li className="bookList" >
            <p>Username</p>
            <div className="mappedContent">
              <p>Edmond</p>
            </div>
          </li>
          <li className="bookList" >
            <p>Mobile No.</p>
            <div className="mappedContent">
              <p>0711741781</p>
            </div>
          </li>
          <li className="bookList" >
            <p>Email</p>
            <div className="mappedContent">
              <p>Tendanisadiki16@gmail.com</p>
            </div>
          </li>
          <li className="bookList" >
            <p>Address</p>
            <div className="mappedContent">
              <p>Roodepoort</p>
            </div>
          </li>
          <li className="bookList" >
            <p>Gender</p>
            <div className="mappedContent">
              <p>Male</p>
            </div>
          </li>
          <li className="bookList" >
            <p>Status</p>
            <div className="mappedContent">
              <i className="statusBtn"><CgPen /></i>
              <i className="statusBtn"><CgTrashEmpty /></i>
            </div>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Users