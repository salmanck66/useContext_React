import React,{useContext} from 'react'
import {userContext} from './Comp1.jsx'

const Comp4 = () => {
  const user = useContext(userContext)
  return (
    <div className='box'>
      <h1>comp3</h1>
      <h2>{`Bye ${user}`}</h2>
    </div>
  )
}

export default Comp4
