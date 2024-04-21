function eValidation(values){
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    const userData = JSON.parse(localStorage.getItem("currentUser"));

    const lsValue = {
        username: values.username,
        password: values.password,
        email: values.email,
        doj: values.doj
    };

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

    if (userData) {
        const { email, password } = userData;

        if (email !== values.email || password !== values.password) {
            localStorage.setItem(values.email, JSON.stringify(lsValue));
            return {success: "user Profile Edited"};
            //need to return to login/delete current user;
        }else{
            windows.alert("No changes made");
        }
    }

    return errors;

}
export default eValidation;