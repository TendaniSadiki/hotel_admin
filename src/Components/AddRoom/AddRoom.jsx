import React, { useRef, useState } from "react";
import './AddRoom.css'
import { doc, setDoc, addDoc } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "@firebase/firestore";
import { db } from "../../firebase-config";

function AddRoom({ path }) {
  const query = collection(db, `products`);
  const roomType = useRef();
  const roomName = useRef();
  const roomDescription = useRef();
  // const prodImage = useRef();
  const numberOfPeople = useRef();

  const prodPrice = useRef();
  const roomFutures = useRef();


  const [show, setShow] = useState(false);
  const [imgcon, setimgcon] = useState("");
  const [docs, loading] = useCollectionData(query);
  console.log(docs);
  console.log(imgcon);

  const [image, setImage] = useState(0);
  const [imageOne, setImageOne] = useState(0);
  const [imageTwo, setImageTwo] = useState(0);
  const [imageThree, setImageThree] = useState(0);

  const converImage = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result.toString())
    };
    reader.readAsDataURL(file)
  };
  const converImageOne = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageOne(reader.result.toString())
    };
    reader.readAsDataURL(file)
  };
  const converImageTwo = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageTwo(reader.result.toString())
    };
    reader.readAsDataURL(file)
  };
  const converImageThree = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageThree(reader.result.toString())
    };
    reader.readAsDataURL(file)
  };

  let refId = null;
  async function handleSubmit(e) {
    e.preventDefault();
    // Add a new document with a generated id.

    await addDoc(collection(db, "hotel"), {
      roomType: roomType.current.value,
      roomName: roomName.current.value,
      roomDescription: roomDescription.current.value,
      headerImage: image,
      roomCode: new Date().getTime(),
    }).then(async (docRefRes) => {
      console.log("Document written with ID: ", docRefRes.id);
      refId = docRefRes.id;
    });

  }
  async function roomSubmit(e) {
    e.preventDefault();
    await setDoc(
      doc(
        db,
        "hotel",
        refId,
        "room",
        numberOfPeople.current.value
      ),
      {
        firstImage: imageOne,
        secImage: imageTwo,
        thirdImage: imageThree,
        price: prodPrice.current.value,
        qty: roomFutures.current.value,
        numberOfPeople: numberOfPeople.current.value,
      }
    ).then((docRef) => {
      console.log("added: ", docRef);
    });
  }

  return (
    <div className="AddRoom">
      <div className="rightSideProductsInfo" >
        {loading && "Loading..."}
        <form className="formProduct" onSubmit={handleSubmit}>
          <div className="Addprod">
            <div className="prod">
              <h2>Add Room</h2>
              <select ref={roomType} >
                <option value="0">Select Type</option >
                <option value="Single">Single</option>
                <option value="Double">Double</option>
                <option value="Triple">Triple</option>
                <option value="Quad">Quad</option>
                <option value="Queen">Queen</option>
                <option value="King">King</option>
                <option value="Twin">Twin</option>
              </select>
            </div>
            <div>
              <input type="text" placeholder="Room Name" required className="roomName" ref={roomName} />
            </div>
            <div className="imgDiv">
               <input type='file' placeholder="Image Here" required id='userImage1'  accept='image/*'  onChange={
                e => converImage(e)
              }
               />
              
            </div>
            <div className="textArea">
              <textarea
                type="text"
                placeholder="About the room"
                ref={roomDescription}
                required
              />
            </div>
            <div className="addRoomBtnContent">
              <button type="submit" className="addRoomBtn" onClick={() => setShow(!show)}> <a href="#">ADD ROOM</a> </button>
            </div>
            <div className="imageContent">
              <img id="image" alt="Roomimage" src={image} />
            </div>
          </div>
        </form>
        {show &&
          <form className='AddFutures' onSubmit={roomSubmit}>
            <h2>Room Features</h2>
            <div className='futures'>
              <label className="numberOfPp">Number of people per room</label>
              <div>
                <select ref={numberOfPeople}>
                  <option value="default">Select Number of People</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div className="formInputContent">
                <label>Room1 Image</label>
                <br></br>
                <input type="file" required
                 className="form-control-input"
                  accept='image/*'
                  onChange={
                    e => converImageOne(e)
                  } />
              </div>
              <div className="formInputContent">
                <label>Room2 Image</label>
                <br></br>
                <input type="file" required
                 className="form-control-input"
                  accept='image/*'
                  onChange={
                    e => converImageTwo(e)
                  } />
              </div>
              <div className="formInputContent">
                <label>Room3 Image</label>
                <br></br>
                <input type="file" required
                 className="form-control-input"
                  accept='image/*'
                  onChange={
                    e => converImageThree(e)
                  } />
              </div>
              <div>
                <label>Price</label>
                <div>
                  <input
                    type="number"
                    step="0.01"
                    placeholder="R0.00"
                    ref={prodPrice}
                      className="Price"
                  />
                </div>
              </div>
              <div>
                <div>
                  <textarea className="futureTextArea" type="text" placeholder="Futures here" ref={roomFutures} />
                </div>
              </div>
              <div className="addRoomBtnContent">
                <button type="submit" className="addBtn"><a>Add</a></button>
              </div>
            </div>
            <div className="viewRoomImages">
              <img alt="Roomimage1" src={imageOne} />
              <img alt="Roomimage2" src={imageTwo} />
              <img alt="Roomimage3" src={imageThree} />
            </div>
          </form>
        }
      </div>
    </div>
  )



}
export default AddRoom;



