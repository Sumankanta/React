// import React, { useState, useEffect } from 'react'

// const App = () => {

//   const [num, setNum] = useState(0)
//   const [num2, setNum2] = useState(100)

//   // useEffect(function(){
//   //   console.log('use effect is running..');
//   // }) // in the console the function run multiple time

//   useEffect(function(){
//     console.log('use effect is running..');
//   }, [num]) // But here the function run only one time
//   //when we pass the num inside the bracket we make the num as a dependency --> [num]

//   return (
//     <div>
//       <h1>num {num}</h1>
//       <h1>num2 {num2}</h1>

//       <button 
//       onMouseEnter={()=>{
//         setNum(num+1)
//       }}
//       onMouseLeave={() => {
//         setNum2(num2+10)
//       }}
//       >click</button>
//     </div>
//   )
// }

// export default App

import React, { useEffect, useState } from 'react'

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChanging(){
    console.log('a changing');
  }

  function bChanging(){
    console.log('b changing');
  }

  useEffect(function(){
    aChanging()
  }, [a])

  useEffect(function(){
    bChanging()
  }, [b])

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button
      onClick={() => {
        setA(a+1)
      }}>Change A</button>
      <button
      onClick={() => {
        setB(b+1)
      }}>Change B</button>
    </div>
  )
}

export default App