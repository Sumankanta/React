import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.users);
  
  return (
    <div className='h-full flex overflow-x-auto rounded-4xl flex-nowrap gap-10 p-4 w-2/3'>
      {props.users.map(function(elem, idx){
        return <RightCard id={idx} key={idx} img={elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default RightContent