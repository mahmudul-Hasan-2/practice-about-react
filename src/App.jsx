import { Suspense } from 'react';
import './App.css'
import Penalty from './Penalty'
import { Posts } from './Posts';
import Count from './Count';
import RedBlueToggle from './RedBlueToggle';
import { Loads } from './Loads';
import { SmartCounter } from './SmartCounter';
import { Destructuring } from './Destructuring';
import { Myselfs } from './Myselfs';
import { Players } from './Players';
import { Waiters } from './Waiters';

// const loadPosts = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/comments');
//   return await res.json();
// }

// const posts = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());

// const arrOfObjectOfAllRich = [
//   { name: "Elon Musk", currentNetWorth: '103,460,189,560,000', rankOfTopRich: 1 },
//   { name: "Larry Page", currentNetWorth: '30,690,000,000,000', rankOfTopRich: 2 },
//   { name: "Sergey Brin", currentNetWorth: '28,234,271,000,000', rankOfTopRich: 3 },
//   { name: "Jeff Bezos", currentNetWorth: '27,006,694,000,000', rankOfTopRich: 4 }
// ]

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
      {/* <Suspense fallback={<h3>Loading....</h3>}>
        <Loads posts={posts}></Loads>
      </Suspense> */}
      {/* <SmartCounter></SmartCounter> */}
      {/* <Destructuring arr={arrOfObjectOfAllRich}></Destructuring> */}
      {/* <Myselfs name="Mahmudul Hasan Nirob" age={40} isStudent={false}></Myselfs>
      <Myselfs name="Mahmudul Hasan Sohag" age={14} isStudent={true}></Myselfs>
      <Myselfs name="Mahmudul Hasan Limon" age={60} isStudent={false}></Myselfs>
      <Myselfs name="Mahmudul Hasan Haider" age={20} isStudent={true}></Myselfs> */}
      {/* <Players></Players> */}
      <Waiters></Waiters>
    </>
  )
}

export default App
