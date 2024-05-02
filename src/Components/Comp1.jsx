// Components/Comp1.jsx
import React,{useEffect, useState,createContext} from 'react';
import Comp2 from './Comp2.jsx'

export const userContext = createContext()
const Comp1 = () => { // Use uppercase for component name
  const [user,setUser] = useState("Salman")
  return (
    <div className='box'>
      <h1>Comp1</h1>
      <h2>{`Hello ${user}`}</h2>
      <userContext.Provider value={user}>
      <Comp2 />
      </userContext.Provider>
    </div>
  );
}

export default Comp1;
