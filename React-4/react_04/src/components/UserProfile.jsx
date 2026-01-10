import React from 'react'

function UserProfile({anyData}) {
    console.log(anyData , "anyData");
    
  return (
    <div>
        <h2>Name: {anyData.name} </h2>
        <h2>Email: {anyData.email} </h2>
        <h2>Age: {anyData.age}</h2>
    </div>
  )
}

export default UserProfile