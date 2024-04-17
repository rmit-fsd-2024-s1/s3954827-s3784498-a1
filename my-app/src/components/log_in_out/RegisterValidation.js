function Validation(values){
    const errors = {};
    const userRegex = /^[a-zA-Z0-9_]{3,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

    if (!values.username) {
        errors.username = "Username is required";
    } else if (!userRegex.test(values.username)) {
        errors.username = "Invalid username format";
    }

    if (!values.email) {
        errors.email = "Email is required";
    } else if (!emailRegex.test(values.email)) {
        errors.email = "Invalid email format";
    }

    if (!values.password) {
        errors.password = "Password is required";
    } else if(!passRegex.test(values.password)){
        errors.password = "Password Must have at least 1 special char, uppercase, number";
    }else if (values.password.length < 12) { 
        errors.password = "Password must be at least 12 characters long";
    } else if (values.password.length > 63) { 
        errors.password = "Password must not be more than 63 characters long";
    }
    
    return errors;
}

export default Validation;