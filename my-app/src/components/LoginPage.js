import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Validation from './LoginValidation';

function LoginPage() {
    const initialValues = { emailInput: "", passInput: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleInput = (e) => {
        setFormValues(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(Validation(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

    return (
        <div className="formContainer">
            <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
            <form className='loginForm' onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="email">
                    <label htmlFor='emailInput'>Email</label>
                    <input type='email' id="emailInput" name="emailInput" placeholder='Enter Email' value={formValues.emailInput} onChange={handleInput}></input>
                </div>
                <p> {formErrors.emailInput}</p>
                <div className="password">
                    <label htmlFor='passInput'>Password</label>
                    <input type='password' id="passInput" name="passInput" placeholder='Enter Password' value={formValues.passInput} onChange={handleInput}></input>
                </div>
                <p> {formErrors.passInput}</p>
                <div className="lButtons">
                    <Link to="/register">Register</Link>
                    <button type='submit'>Login</button>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;
