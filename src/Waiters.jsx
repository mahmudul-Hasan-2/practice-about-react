import React, { useEffect, useState } from 'react'
import { Waiter } from './Waiter';

export function Waiters() {

  const [waiters, setWaiters] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setWaiters(data));
  }, [])

  return (
    <div>
      <h2>Waiters: {waiters.length}</h2>
      {
        waiters.map(waiter => <Waiter key={waiter.id} waiter={waiter}></Waiter>)
      }
    </div>
  )
}