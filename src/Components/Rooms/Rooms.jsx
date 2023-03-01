import { useState } from "react";
import { getAuth } from "firebase/auth";
import "./Rooms.css";
import { db } from "../../firebase-config";



const Rooms = () =>{
    const [ojbHandler, setObjHandler] = useState([]);
    const arrObj = [];
    
    return(
        <div className="room">
        <br></br>
        <br></br>
        
        <h1>Rooms</h1>
        {ojbHandler.map((room, inx)=> {
          console.log(room.Room+ "now")
          return(
        <ul className="userContainer" key={inx}>
        <li className="roomList">Room name: {room.RoomName}</li>
          <li className="roomList" >Room no.</li>
          <li className="roomList" >Price</li>
          <li className="roomList" >Features</li>
          <li className="roomList" >Discription</li>
          <li className="roomList" >images</li>
      </ul>
          )
        })}
       
    </div>
    )
}

export default Rooms;