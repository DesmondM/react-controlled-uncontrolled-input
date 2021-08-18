import React, {useState} from 'react'

export const ToggleBtn = () => {
    const [show, setShow] = useState(false)
    
    return (
        <div>
            <button onClick ={()=>setShow(!show)}>Show /Hide</button>
         {show && <Item/>}
        
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

