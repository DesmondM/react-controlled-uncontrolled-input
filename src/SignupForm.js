import React, {useState} from 'react'

function SignupForm() {
    const [values, setValues] = useState({
        fullName: "",
        email: "",
        password: "",
    });

    const handleChange = (e) =>{
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
        
    }

    const handleFormSubmit =(e) =>{
        e.preventDefault();
        console.log(values);
    }
    return (
        <>
         <form className = "" onSubmit = {handleFormSubmit}>
            <div>
                <label className ="">Full Name</label>    
                <input className ="" type="text"    name="fullName" 
                                                    value={values.fullName}
                                                    onChange= {handleChange}/>
            </div>
   
            <div>
                <label className ="">Email</label>    
                <input className ="" type="email"   name ="email" 
                                                    values = {values.email}
                                                    onChange= {handleChange}/>
            </div>  
                <div>
                <label className ="">Password</label>    
                <input className ="" type="password"   name ="password" 
                                                    value={values.password}
                                                    onChange= {handleChange}/>
            </div> 
            <div>
                <button type ="submit">Submit</button>
            </div>
         </form>   
        </>
    )
}

export default SignupForm;
