import React from 'react'

export function Waiter({ waiter }) {
  const {name, phone, email, username, address:{city, street}} = waiter;
  
  return (
    <div className='card'>
      <h2>Name: {name}</h2>
      <h2>Username: {username}</h2>
      <h5>Phone Number: {phone}</h5>
      <p>Email: {email}</p>
      <p>Address: {street}, {city}</p>
    </div>
  )
}