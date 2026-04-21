import React, { useState } from 'react'

const App = () => {

  // let a = 20;

  // function changeA(){
  //   console.log(a);
  //   a++;
  //   console.log(a);
  // }

  // const [num, setnum] = useState(30);
  // const [name, setname] = useState("Ayush")

  // function changeNum(){
  //   setnum(60);
  //   setname('Suman')
  // }
  

  // const [first, setfirst] = useState(second)

  const [num, setnum] = useState(0)

  // function increment(){
  //   console.log('incresing');
  //   setnum(num+1);
  // }

  const increment = () =>{
    console.log('Incresing');
    setnum(num+1);
  } 

  function decrement(){
    console.log('decresing');
    if(num < 0){
      setnum(0);
      return;
    }
    setnum(num-1);
  }

  function jump5num(){
    console.log('Jump by 5');
    setnum(num+5);
  }

  function reduce5(){
    console.log('Reduce by 5');
    if(num < 0){
      setnum(0);
      return;
    }
    setnum(num-5);
  }

  return (
    <>
    {/* <div>Value of a is {num} <br /> value of user is {name}</div>
    <button onClick={changeNum}>Change value</button> */}

    <h1>{num}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={jump5num}>Increse By 5</button>
    <button onClick={reduce5}>Decrese By 5</button>
    </>
  )
}

export default App