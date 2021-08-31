import React, {useState}  from 'react'


const SimpleBtn = () => {
    const [counter, setCounter] = useState(0)
    const [fib, setFib] = useState(0)
    const [complexCount, setComplexCount] = useState(15)

    const increaseVal =()=>{
    setCounter(counter+1)
    }

    const decreaseVal = ()=>{
        setFib(fib-5)
    }

    const complexCounter = () =>{
    //    setTimeout(()=>{setComplexCount(complexCount+2)},2000)
     setTimeout(()=>{
         setComplexCount((prevState)=>{
            return prevState +1
        })
     }, 2000)   
    

    }
    return (
        <div>
           <h1>{counter}</h1>
            <h1>{fib}</h1>
           <button onClick={()=>[increaseVal(), decreaseVal()]}>Increase Value</button> 
           <h1>{complexCount}</h1>
           <button onClick ={()=>complexCounter()}>Complex Counter</button>
        </div>
    )
}

export default SimpleBtn
