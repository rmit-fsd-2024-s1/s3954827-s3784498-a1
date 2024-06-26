import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LValidation from './LoginValidation';

function LoginPage() {
    const initialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();

    const handleInput = (e) => {
        setFormValues(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(LValidation(formValues));
        setIsSubmit(true);
        // If there are no form errors, navigate to the home page
        if (Object.keys(formErrors).length === 0) {
            navigate("/");
        }
    }

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors, isSubmit, formValues]);

    return (
        <div className="formContainer">
            <form className='loginForm' onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="email">
                    <label htmlFor='emailInput'>Email</label>
                    <input type='email' id="emailInput" name="email" placeholder='Enter Email' value={formValues.email} onChange={handleInput}></input>
                </div>

                <div className="password">
                    <label htmlFor='passInput'>Password</label>
                    <input type='password' id="passInput" name="password" placeholder='Enter Password' value={formValues.password} onChange={handleInput}></input>
                </div>
                <div className="errorMessages">
                    {formErrors.email && <p>{formErrors.email}</p>}
                    {formErrors.password && <p>{formErrors.password}</p>}
                </div>
                <div className="lButtons">
                    <Link to="/register">Register</Link>
                    <button type='submit'>Login</button>
                </div>

            </form>
        </div>
    );
}

export default LoginPage;
