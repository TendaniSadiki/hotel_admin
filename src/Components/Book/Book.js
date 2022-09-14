import React from 'react'
import "./Book.css"
function Book() {
  return (
    <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="book">
        
        <h1>Book</h1>
        <ul className="bookContainer">
          <li className="bookList">Room</li>
          <li className="bookList" >User</li>
          <li className="bookList" >Bookin</li>
          <li className="bookList" >Check In</li>
          <li className="bookList" >Check Out</li>
          <li className="bookList" >payments</li>
          <li className="bookList" >Status</li>
          
        </ul>
    </div>
    </div>
  )
}

export default Book