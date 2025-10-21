import React, { useRef } from 'react'

const RefExample = () => {

    const qtyref =useRef()

    const increment =()=>{
        qtyref.current.value ++
    }

    
  return (
    <div className='container p-5'>

        <input placeholder='No. of Items' ref={qtyref} />
        <button onClick={increment}>+</button>
        
    </div>
  )
  
}

export default RefExample