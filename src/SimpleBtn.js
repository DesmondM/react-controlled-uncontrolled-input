import React, {useState}  from 'react'


const SimpleBtn = () => {
    const [counter, setCounter] = useState(0)
    const [fib, setFib] = useState(0)

    const increaseVal =()=>{
    setCounter(counter+1)
    }

    const decreaseVal = ()=>{
        setFib(fib-5)
    }

    return (
        <div>
           <h1>{counter}</h1>
            <h1>{fib}</h1>
           <button onClick={()=>[increaseVal(), decreaseVal()]}>Increase Value</button> 
        </div>
    )
}

export default SimpleBtn
