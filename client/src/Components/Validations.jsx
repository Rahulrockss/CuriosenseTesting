export default function Validation(values){
    let errors ={}

    // const email_pattern =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // const password_pattern =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    if(values.name===""){
        errors.name="Name Should Not Empty"
    }

    if(values.email===""){
        errors.email="Email Should Not Empty"
    // }else if(!email_pattern.test(values.email))
    // {
    //      errors.email="Invalid Email"
    }else{
        errors.email=""
    }

    if(values.password===""){
        errors.password="Password Should Not Empty"
    // }else if(!password_pattern.test(values.password))
    // {
    //      errors.password="1 small and Capital char 1 Number to 8"
    }else{
        errors.password=""
    }

    return errors;
}