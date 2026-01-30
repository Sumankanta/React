import React from 'react'
import Cards from './components/Cards'

const App = () => {
  return (
    <div className='parent'>
      <Cards user='Sumankanta Padhan' age={23} img='https://images.unsplash.com/photo-1751097006268-ae4601fcb117?q=80&w=1518&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>

      <Cards user='Sumankanta Padhan' age={23} img='https://plus.unsplash.com/premium_photo-1763072944317-fc4b2fd81470?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>

      <Cards user='Sumankanta Padhan' age={23} img='https://images.unsplash.com/photo-1768036479485-6127b351b0c5?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  )
}

export default App