import { use } from "react"
import { Load } from "./Load";

export function Loads({ posts }) {

  const Posts = use(posts);

  return (
    <div>
      <h2>Posts: {Posts.length}</h2>
      {
        Posts.map(post => <Load post={post}></Load>)
      }
    </div>
  )
}