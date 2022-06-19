import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  return (
    <div className="App">
      <Comments></Comments>
    </div>
  );
};


function Comments() {
  const [comments, setComment] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setComment(data))
  }, [])
  return (
    <div >
      <h3>Comments : </h3>
      {
        comments.map(comment => <Comment title={comment.title} body={comment.body} ></Comment>)
      }
    </div>
  )
}

function Comment(props) {
  return (
    <div className='product'>
      <h2>Title: {props.title}</h2>
      <p>Body: {props.body}</p>
      <p></p>
    </div>
  )
}








export default App;










/* import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>
  );
};

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }
    , [])
  return (
    <div >
      <h3>External Users</h3>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )

}

function User(props){
  return (
    <div className='product'>
      <h2>Name: {props.name}</h2>
      <p>Email: {props.email}</p>
    </div>
  )
}





function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount)
  };
  const handleDecrease = () => {
    const newCount = count - 1;
    setCount(newCount)
  };
  return (
    <div className="product">
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
};




function Product(props) {
  return (
    <div className="product">
      <h2>Name: {props.name}</h2>
      <h4>Price: {props.price}</h4>
    </div>
  )
};



export default App; */


/*
  const products = [
    { name: 'monile', price: 45 },
    { name: 'camera', price: 5654 },
    { name: 'laptop', price: 5524 },
    { name: 'watch', price: 556 },
    { name: 'shoe', price: 754 }
  ]
*/

/*
  {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
*/

// import logo from './logo.svg';
// import './App.css';

// function App(countries) {
//   const products = [
//     { name: 'monile', price: 45 },
//     { name: 'camera', price: 5654 },
//     { name: 'laptop', price: 5524 },
//     { name: 'watch', price: 556 },
//     { name: 'shoe', price: 754 }
//   ]
//   console.log(countries)

//   return (
//     <div className="App">
//       {
//         countries.map(country => <Product name={country.population} price={country.population}></Product>)
//         // products.map(product => <Product name={product.name} price={product.price}></Product>)
//       }
//     </div>
//   );
// }

// function countriees(){
//   fetch('https://restcountries.com/v3.1/all')
//   .then(res => res.json())
//   .then(data => App(data))
// }
// countriees()

// function Product(props) {
//   return (
//     <div className="product">
//       <h2>Name: {props.name}</h2>
//       <h4>Price: {props.price}</h4>
//     </div>
//   )
// }

// export default App;

