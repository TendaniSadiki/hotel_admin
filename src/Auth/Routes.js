import React, {  useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


//components
import Users from '../Components/Users/Users';
import Login from '../Components/Login/Login';
import Rooms from '../Components/Rooms/Rooms';
import SIgnup from '../Components/SIgnup/SIgnup';
import Book from '../Components/Book/Book';
import AddRoom from '../Components/AddRoom/AddRoom';







const AuthRoutes = () =>{
    const [loginState, setLoginState] = useState(null);
    const [Objrooms,getObjRooms]=useState([{room:"Gold room",price:4000}]);
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setLoginState(true)
        // ...
      } 
      else{
          setLoginState(false)
      }
    });
    return(
//Router


        <Router>
            {
            loginState ?
            //Online Handler
                <Routes>
                <Route exact path="*" element={<Users/>}/>
                <Route exact path="/Users" element={<Users/>}/>
                <Route exact path="/Rooms" element={<Rooms/>}/>
                <Route exact path="/Book" element={<Book/>}/>
                <Route exact path="/AddRoom" element={<AddRoom/>}/>
                {
                //Offline Handler
            }
               
              
                </Routes>
            :
            //Offline Handler
            <Routes>
                    <Route exact path="*" element={<Login/>}/>
                    <Route exact path="/Signup" element={<SIgnup/>}/>
                    <Route exact path="/Login" element={<Login/>}/>
                </Routes>
            }
        </Router>
           
    )
}

export default AuthRoutes;
 