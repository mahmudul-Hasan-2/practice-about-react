import React, { use } from 'react'
import { Post } from './Post';

export function Posts ({ postsPromise }) {

  const posts = use(postsPromise);

  return (
    <div>
      {
        posts.map(post => <Post key={post.id} post={post}></Post>)
      }
    </div>
  )
}