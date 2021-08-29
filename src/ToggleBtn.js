import React, {useState} from 'react'

export const ToggleBtn = () => {
    const [show, setShow] = useState(false)
    
    return (
        <div>
            <button onClick ={()=>setShow(!show)}>{show?<p>HIDE</p>: <p>SHOW</p>}</button>
         {
         show ?
         <Item/> 
         :<Item2/>
         }
        
        </div>
       
    )
};


const Item = () => {
    return (
        <div>
            <h1>This is showing</h1>
        </div>
    )
};

const Item2 = () => {
    return (
        <div>
            <h1>This is NOT showing</h1>
        </div>
    )
};

