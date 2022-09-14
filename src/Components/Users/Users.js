import { useEffect, useState} from "react";
import "./Users.css";

import { auth, db} from "../../firebase-config";
import { getDatabase, ref, child, get } from "firebase/database";



export default function Users(){ 

    

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
      
    
  
    // add
   



return(
  <div className="users">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>Users</h1>
     
      {ojbHandler.map((room, inx)=>(
        <ul className="userContainer">
        <li className="userList">Username</li>
        <li className="userList" >Surname</li>
        <li className="userList" >Contact no.</li>
        <li className="userList" >email</li>
        <li className="userList" >image</li>
      </ul>
       
       ))}
  </div>
    );
}
