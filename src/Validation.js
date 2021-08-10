import React from 'react'

function Validation(values) {
let errors ={};

if(!values.fullName){
    errors.fullName ="Name is required"
}
if(!values.email){
    errors.email ="Email is required"
} else if(!/\S+@\S+\.\S+/.test(values.email)){
    errors.email="Email is invalid"
}
if(!values.password){
    errors.password = "Password required"
} else if(values.password.length<6){
    errors.password = "Password must be at least 6 characters"
}

    return errors;
}

export default Validation;
