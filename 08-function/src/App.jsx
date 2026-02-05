import React from 'react'

const App = () => {

  // function btnClicked(){
  //   console.log('Button Clicked');
  // }

  // function btnDoubleClicked(){
  //   console.log('Button Double Clicked')
  // }

  // function mouseEnter(){
  //   console.log('Mouse Enter');
  // }

  function inputChanging(){
    console.log('Input Changing');
  }

  return (
    <div>
      {/* <button onMouseEnter={mouseEnter} onClick={btnClicked}>Click Me</button>
      <button onDoubleClick={btnDoubleClicked}>Click Me</button> */}

      <input onChange={function (elem) {
        // console.log(elem.target.value);
        inputChanging();
      }} type="text" placeholder='Enter Name'/>
    </div>
  )
}

export default App