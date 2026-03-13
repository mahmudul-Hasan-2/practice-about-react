import { Suspense } from 'react';
import './App.css'
import Penalty from './Penalty'
import { Posts } from './Posts';
import Count from './Count';
import RedBlueToggle from './RedBlueToggle';
import { Loads } from './Loads';

// const loadPosts = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/comments');
//   return await res.json();
// }

const posts = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());

function App() {
  // const postsPromise = loadPosts();

  return (
    <>

      {/* <Penalty></Penalty> */}

      {/* <Suspense fallback={<p>Loading Posts..........</p>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense> */}
      {/* <Count></Count> */}
      {/* <RedBlueToggle></RedBlueToggle> */}
      <Suspense fallback={<h3>Loading....</h3>}>
        <Loads posts={posts}></Loads>
      </Suspense>
    </>
  )
}

export default App
