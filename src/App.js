import logo from './logo.svg';
import './App.css';
import Person from './components/Person'
import ClassComponet from './components/ClassComponent'
import Products from './components/Products';
import Friends from './components/Friends';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const friends = [
    { name: 'Zahid', age: '24', skill: 'Asp .net' },
    { name: 'Emon', age: '25', skill: 'PHP' },
    { name: 'Ashik', age: '23', skill: 'Java' },
    { name: 'Forhad', age: '22', skill: 'Wordpress' },
  ]

  const allProducts = [
    { name: 'Photshop', price: '$99.9' },
    { name: 'Illustator', price: '$120' },
    { name: 'Illustator', price: '$120' }
  ]

  return (
    <div className='App-header'>
      <Counter></Counter>
      <Users></Users>
      {
        allProducts.map(pd => <Products product={pd}></Products>)
      }

    </div>
  )

}

function Users() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      setUsers(data)
    })
  },[])

  return (
    <div>
      <h1>Dynamic Uers {users.length}</h1>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(20)
  // const handleIncrease = () => setCount(count + 1)
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}



export default App;
