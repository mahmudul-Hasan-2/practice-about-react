import React, { useEffect, useState } from 'react'

export const Players = () => {

  const [Players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setPlayers(data));
  }, [])

  return (
    <div className='card'>
      <h4>Players {Players.length}</h4>
      {
        Players.map(player => <p>{player.name}</p>)
      }
    </div>
  )
}