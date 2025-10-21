import React, { createContext, useState } from 'react'
import Comp1 from './Comp1'

export const userData = createContext()

const MainComp = () => {

    const [count,setCount] =useState(0)
  return (
    <div className='container p-5'>

        <userData.Provider value={[count,setCount]}>
        <h1>Counter : {count}</h1>
        <button onClick={()=>setCount(count+1)}>Add</button>

        <h2>Main Component</h2>
        <Comp1 />

        </userData.Provider>


    </div>
  )
}

export default MainComp