import React from 'react'

export function Post({ post }) {
  console.log(post);
  
  const { name, email, body } = post;

  return (
    <div className='card'>
      <h4>{name}</h4>
      <p>{email}</p>
      <p>{body}</p>
    </div>
  )
}
