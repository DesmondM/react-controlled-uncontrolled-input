import React, {useState, useEffect} from 'react'
import Validation from './Validation';

function SignupForm({submitForm}) {
    const [values, setValues] = useState({
        fullName: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false)

    const handleChange = (e) =>{
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
        
    }

    const handleFormSubmit =(e) =>{
        e.preventDefault();
        console.log(values);
        setErrors(Validation(values));
        setDataIsCorrect(true);
    }
        useEffect(()=>{
            if(Object.keys(errors).length===0 && dataIsCorrect){
                submitForm(true);
            }
        }, [errors])
    return (
        <>
        
         <form className = "form" onSubmit = {handleFormSubmit}>
            <div>
                <label className ="">Full Name</label>    
                <input className ="" type="text"    name="fullName" 
                                                    value={values.fullName}
                                                    onChange= {handleChange}/>
            </div>
            {errors.fullName && <p>{errors.fullName}</p>}
   
            <div>
                <label className ="">Email</label>    
                <input className ="" type="email"   name ="email" 
                                                    values = {values.email}
                                                    onChange= {handleChange}/>
            </div>  
            {errors.email && <p>{errors.email}</p>}
                <div>
                <label className ="">Password</label>    
                <input className ="" type="password"   name ="password" 
                                                    value={values.password}
                                                    onChange= {handleChange}/>
            </div> 
            {errors.password && <p>{errors.password}</p>}
            <div>
                <button type ="submit">Submit</button>
            </div>
         </form>   
        </>
    )
}

export default SignupForm;
