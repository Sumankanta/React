// import React, { useState } from 'react'

// const App = () => {

//   const [num, setnum] = useState(10)

//   const buttonClick = () =>{
//     console.log('Current value ' + num);
//     setnum(num+1);
//   }

//   return (
//     <>
//     <h1>{num}</h1>
//     <button onClick={buttonClick}>Click</button>
//     </>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {

  const [data, setdata] = useState({user:'Suman', age:23})

  const btnClicked = () => {
    // const newData = {...data}
    // newData.user = 'Sumankanta'
    // setdata(newData)

    // newData.age = 24
    // setdata(newData)

    setdata(prev => ({...prev, age:24}))
    }


  return (
    <>
    <h1>{data.user}, {data.age}</h1>
    <button onClick={btnClicked}>Click</button>
    </>
  )
}

export default App