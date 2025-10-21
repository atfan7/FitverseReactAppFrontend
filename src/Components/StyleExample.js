import React from "react";
import "./style.css"


const StyleExample =()=> {

     const myStyles ={
        color:'white',
        backgroundColor: 'blue',
        padding: '20px'

            
        }
    return (

       


        <div style={{textAlign:"center"}}>
            <h1 style ={ {color:'red'}  }  >Inline Styling   </h1> 

            <h1 style ={myStyles}>Internal Styling</h1>
            <h1 className="Success">External Styling</h1>
        </div>
    )
}

export default StyleExample