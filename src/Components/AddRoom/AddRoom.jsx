import React,{useState} from 'react'

export default function AddRoom() {
    const [roomName, setRoomName] = useState("");
    const [des, setRoomDescription] = useState("");
    const [prices, setPrice] = useState("");
    const [adultsNumber, setAdultsNumber] = useState("")
    const [childNumber, setChildNumber] = useState("")

    const [image, setImage] = useState("");
    const [imageOne, setImageOne] = useState("");
    const [imageTwo, setImageTwo] = useState("");
    const [imageThree, setImageThree] = useState("");


    const converImage = e =>{
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onloadend = () =>{
          setImage(reader.result.toString())
        };
        reader.readAsDataURL(file)
      };
      const converImageOne = e =>{
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onloadend = () =>{
          setImageOne(reader.result.toString())
        };
        reader.readAsDataURL(file)
      };
      const converImageTwo = e =>{
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onloadend = () =>{
          setImageTwo(reader.result.toString())
        };
        reader.readAsDataURL(file)
      };
      const converImageThree = e =>{
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onloadend = () =>{
          setImageThree(reader.result.toString())
        };
        reader.readAsDataURL(file)
      };
    const add = () => {
        let roomDetails = {
            headerImg:image,
            RoomName: roomName,
            ImgOne: imageOne,
            ImgTwo: imageTwo,
            ImgThree: imageThree,
            adults:adultsNumber,
            children:childNumber,
            RoomPrice: prices,
            description: des,
            id: Date.now()

        };
    
    }
    
  return (
    <div>
         <div className="rightContent">
                <div className="rightInsideContent">
                    <h1>Add Book</h1>
                    <div className="formContent">
                        <div className="formInputContent">
                            <label>Header Image</label>
                            <br></br>
                            <input  required 
                              type="file"
                              className="form-control"
                            
                              onChange={
                                e => converImage(e)
                              } />
                        </div>
                        <div className="formInputContent">
                            <label></label>
                            <input type="text" required placeholder="Room name"
                                onChange={(text) => {
                                    setRoomName(text.target.value);
                                }}
                            />
                        </div>
                        <div className="formInputContent">
                            <label>Room1 Image</label>
                            <br></br>
                            <input type="file" required 
                              
                              className="form-control"
                              accept='image/*'
                              onChange={
                                e => converImageOne(e)
                              }  />
                        </div>
                        <div className="formInputContent">
                            <label>Room2 Image</label>
                            <br></br>
                            <input type="file" required 
                              
                               className="form-control"
                               accept='image/*'
                               onChange={
                                 e => converImageTwo(e)
                               } />
                        </div>
                        <div className="formInputContent">
                            <label>Room3 Image</label>
                            <br></br>
                            <input type="file" required 
                               className="form-control"
                               accept='image/*'
                               onChange={
                                 e => converImageThree(e)
                               }  />
                        </div>
                        <div className="formInputContent">
                            <label>Price</label>
                            <br></br>
                            <input type="number" required placeholder="R 0.00" value={prices}
                                onChange={(text) => {
                                    setPrice(text.target.value);
                                }}
                            />
                        </div>
                        <div className="formInputContent">
                            <label>Adults</label>
                            <br></br>
                            <input type="number" required placeholder="Adults" value={adultsNumber}
                                onChange={(text) => {
                                    setAdultsNumber(text.target.value);
                                }}
                            />
                        </div>
                        <div className="formInputContent">
                            <label>Price</label>
                            <br></br>
                            <input type="number" required placeholder="Children" value={childNumber}
                                onChange={(text) => {
                                    setChildNumber(text.target.value);
                                }}
                            />
                        </div>
                        <div className="formInputContent">
                            <label>Description</label>
                            <br></br>
                            <input type="text" required placeholder="Description" value={des}
                                onChange={(text) => {
                                    setRoomDescription(text.target.value);
                                }}
                            />
                        </div>
                        <div className="formButton">
                            <button onClick={add} >ADD</button>
                        </div>
                    </div>
                </div>
                <div className="circle1"></div>
                <div className="circle2"></div>
            </div>
    </div>
  )
}
