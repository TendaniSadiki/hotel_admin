import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import "./Rooms.css";
import { auth, db} from "../../firebase-config";
import { getDatabase, ref, child, get } from "firebase/database";


const Rooms = () =>{
    const [ojbHandler, setObjHandler] = useState([]);
    const arrObj = [];
    
    useEffect(() => {
      
          // read
      const dbRef = ref(getDatabase());
      get(child(dbRef, `Hotels`)).then((snapshot) => {
     if (snapshot.exists()) {
      console.log(snapshot.val());
      let keys = Object.keys(snapshot.val())
      const Key = snapshot.key;
      const Data = snapshot.val();
    
      let arr = []
      for (var x = 0; x < keys.length; x++){
        arr.push(Data[keys[x]])
      }
      console.log(arr)
      setObjHandler(arr);
    
    //   snapshot.forEach((Data) => {
    //   const childDatas = Data.val();
    //   let results =  childDatas;
    //   let arr = [];
    //   const obj  = results;
    //   arrObj.push(arr)
    //   console.log(arrObj);
    
    //   console.log(arr);
    
    //   // Data.forEach((childDatas) =>{
    //   //   const Datas = childDatas.key;
    //   //   const Keys = childDatas.val();
     
       
    //   // })
    
      
    
    // })
     
    } else {
    console.log("No data available");
    }
    }).catch((error) => {
    console.error(error);
    });
        
        
      },[]);

    const auth = getAuth();
const user = auth.currentUser;
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.

  const email = user.email;
  


  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const uid = user.uid;
}

    return(
        <div className="room">
        <br></br>
        <br></br>
        
        <h1>Rooms</h1>
        {ojbHandler.map((room, inx)=>(
        <ul className="userContainer">
        <li className="roomList">Room name: {room.name}</li>
          <li className="roomList" >Room no.</li>
          <li className="roomList" >Price</li>
          <li className="roomList" >Features</li>
          <li className="roomList" >Discription</li>
          <li className="roomList" >images</li>
      </ul>
       
       ))}
       
    </div>
    )
}

export default Rooms;