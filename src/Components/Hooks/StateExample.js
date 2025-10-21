import React, { useEffect, useState } from 'react'

const StateExample = () => {

    const[count,setCount] =useState(0)
    useEffect (()=>{
        document.title=`you clicked ${count} times`
    })
  return (
    <div className='container p-5'>
        <h1>Count : {count}</h1>
        <button onClick={()=>setCount(count+1)}>Add</button>

    </div>
  )
}

export default StateExample