import React, { useMemo } from 'react'
import { useState } from 'react'

const MemoExample = () => {
    const [count,setCount] =useState(0);

    const[number,setNumber] =useState(5)


    const result = useMemo(()=>{
        return Mul(number)
    },[number])
  return (
    <section className='container p-5'>

        <h1>Counter  :{count}</h1>
        <button onClick={()=> setCount(count +1)}>Add</button>

        <h1>Result : {result}</h1>
        <button onClick={()=> setNumber(number +1)}>Add</button>
        
    
    
    </section>
  )
}

const Mul =(num)=>{
    console.log(`function called`)
    return num *num

}

export default MemoExample