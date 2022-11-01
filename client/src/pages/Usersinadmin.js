import { useEffect, useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import React from 'react'
import {getAllUsers}from'../redux/actions/userAction'
import "./usersinadmin.css"


function Usersinadmin() {
  const { users } = useSelector(state => state.usersReducer)
  const [totalusers,setTotalUsers]=useState([])
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getAllUsers())
  },[])

console.log(users)
  return (
    <div>
      <h1>USERS DATA</h1>
      {users.map(user=>{
    return <div className="user-card-in-admin">
        <h3>
         User Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {user.username}
        </h3>
        <h3>
        User Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {user.useremail}
        </h3>
        <h3>
         User Phone &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {user.userphone}
        </h3><h3>
        User CNIC &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {user.usercnic}
        </h3>
      </div>
    })}
    
    <button className="go-back-admin" onClick={()=>{window.location.href='./admin'}}>Home</button></div>
  )
}

export default Usersinadmin