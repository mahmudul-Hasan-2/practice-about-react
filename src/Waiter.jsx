import React from 'react'

export function Waiter({ waiter }) {
  const {name, phone, email} = waiter;
  
  return (
    <div className='card'>
      <h2>{name}</h2>
      <h2>{phone}</h2>
      <p>{email}</p>
    </div>
  )
}