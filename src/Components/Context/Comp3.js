import React, { useContext } from 'react'
import { userData } from './MainComp'

const Comp3 = () => {
    const[count,setCount] =useContext(userData)
  return (
    <div>

        <h1>Counter in Comp3 :{count}</h1>
        <button onClick={()=>setCount(count+1)}>Add</button>
        <h2>Comp3 </h2>


        </div>
  )
}

export default Comp3;