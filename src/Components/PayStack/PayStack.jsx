import React, { useState, useEffect } from 'react'
import PaystackPop from '@paystack/inline-js'
import fire, { auth, db } from '../Config/Config'
import { onAuthStateChanged } from 'firebase/auth'

import { useLocation } from 'react-router-dom'


export const PayStack = (props) => {

    const [userDetails, setUserDetails] = useState({});
    const location = useLocation();
    console.log('Loca: ', location.state)
    // const amount= useState(location.state)

    // console.log(this.props.location.state)
    function GetUserUid() {
        const [uid, setUid] = useState(null);
        useEffect(() => {
            auth.onAuthStateChanged(user => {
                if (user) {
                    setUid(user.uid);
                }
            })
        }, [])
        return uid;
    }
    const uid = GetUserUid();
    console.log(uid)
    function GetCurrentUser() {
        useEffect(() => {
            const unbn = onAuthStateChanged(auth, userAuth => {
                if (userAuth) {
                    fire.firestore().collection("user").doc(userAuth.uid).get().then(snapshot => {
                        console.log(snapshot.data())
                        setUserDetails(snapshot.data())
                    })

                } else {


                    // setUser(null)
                }
            })
            return unbn
        }, [])
    }
    GetCurrentUser()




    const [cartProducts, setCartProduct] = useState([])

    // getting cart product from the firestore collection and updating the state
    const cardProduct = []

    const [email, setEmail] = useState("")
    const [amount, setAmount] = useState(location.state.total)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")


    const paywithpaystack = (e) => {
        e.preventDefault()
        console.log(userDetails)
        console.log("current amount ", amount)
        const paystack = new PaystackPop()
        paystack.newTransaction({
            key: "pk_test_145aacfe44042ba956a6f2039dda1dd7477f95a3",
            amount: amount * 100,
            email: userDetails.Email,
            firstName: firstName,
            lastName: userDetails.FullName,
            onSuccess(transaction) {
                let message = `Payment Complete! Reference ${transaction.reference}`
                alert(message)
                setEmail("")
                setAmount("")
                setFirstName("")
                setLastName("")
            },
            onCancel() {
                alert("Transaction Cancelled")
            }
        })
        // alert("Successful payment")

    }
    return (
        <div className='w3-container w3-row' style={{ justifyContent: 'center', padding: '10%', paddingBottom: '10%', backgroundColor: 'whitesmoke', margin: '7%' }}>
            <h1>Checkout Details</h1>
            <p style={{ fontSize: '22px', paddingLeft: '2%' }}>Customer Name: {userDetails.FullName}</p>
            <p style={{ fontSize: '22px', paddingLeft: '2%' }}>Customer Email: {userDetails.Email}</p>
            <p style={{ fontSize: '22px', paddingLeft: '2%' }}>Amount to pay : R {amount}</p>

            <p>{firstName}</p>


            <div className='form-submit'>

                <button type="submit" onClick={paywithpaystack} style={{ border: '1px solid transparent', backgroundColor: ' grey', fontSize: '18px', justifyContent: 'center', padding: '1%', width: '20%', color: 'whitesmoke', fontWeight: '500', alignSelf: 'center', margin: '2%', cursor: 'pointer' }}>Pay</button>
            </div>


        </div>
    )
}
