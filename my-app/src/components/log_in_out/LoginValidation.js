function LValidation(values){
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const logData = JSON.parse(localStorage.getItem(values.email));

    //gotta add a function that deletes currentUser

    if (!values.email) {
        errors.email = "Email is required";
    } else if (!emailRegex.test(values.email)) {
        errors.email = "Invalid email format";
    }

    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 6) { 
        errors.password = "Password must be at least 6 characters long";
    } else if (values.password.length > 30) { 
        errors.password = "Password must not be more than 30 characters long";
    }

    if (logData) {
        const {email, password } = logData;
    
        if (email !== values.email) {
            errors.email = "Email doesnt exist";
        }
        if (password !== values.password) {
            errors.password = "Password doesnt exist";
        }else if(email === values.email && password === values.password){
            localStorage.setItem("currentUser", JSON.stringify(logData));
            return {success: "user logged in"};
        }
    } 
    
    return errors;
}

export default LValidation;
