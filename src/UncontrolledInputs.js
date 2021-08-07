import React, {useEffect, useRef} from 'react';


function UncontrolledInputs() {
    const refContainer = useRef(null);
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(refContainer.current.value);
    };

    useEffect(()=>{
        refContainer.current.focus();
    });
    return (
        <>
           <form className="form" onSubmit={handleSubmit}>
                <div>
                    <input type="text" ref={refContainer}/>
                </div>   
                <button type="submit">Submit</button>
            </form> 
        </>
    )
}

export default UncontrolledInputs
