import React from 'react'
import "./Book.css"
import { CgCheck } from "react-icons/cg";
import { CgClose } from "react-icons/cg";


function Book() {
  return (
    <div >
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="book">

        <h1 className='bookTitle'>Book</h1>
        <ul className="bookContainer">
          <li className="bookList">
            <p>Room</p>
            <div className="mappedContent">
              <p>Exclusive</p>
            </div>
          </li>
          <li className="bookList" >
            <p>User</p>
            <div className="mappedContent">
              <p>Edmond</p>
            </div>
          </li>
          <li className="bookList" >
            <p>No. of People</p>
            <div className="mappedContent">
              <p>3</p>
            </div>
          </li>
          <li className="bookList" >
            <p>Check In</p>
            <div className="mappedContent">
              <p>2023/03/01</p>
            </div>
          </li>
          <li className="bookList" >
            <p>Check Out</p>
            <div className="mappedContent">
              <p>2023/03/05</p>
            </div>
          </li>
          <li className="bookList" >
            <p>Payments</p>
            <div className="mappedContent">
              <p>T363ehGTHS62</p>
            </div>
          </li>
          <li className="bookList" >
            <p>Status</p>
            <div className="mappedContent">
              <i className="statusBtn"><CgCheck /></i>
              <i className="statusBtn"><CgClose /></i>
            </div>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Book