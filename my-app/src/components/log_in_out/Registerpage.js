import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Validation from './RegisterValidation';
import { useNavigate } from 'react-router-dom';
import clean from './cleanSlate';

function RegisterPage() {
    clean();
    const initialValues = { username: "", email: "", password: ""};
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

    const handleSubmit = async () => {
        try{
            e.preventDefault();
            setFormErrors(Validation(formValues));
            setIsSubmit(true);

            if(Object.keys(formErrors).length === 0 && isSubmit){
                navigate('/EditProf');
            }
        }catch{
            console.error(error);
        }
    }
    
    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
      }
  }, [formErrors, isSubmit, formValues]);

    return (
        <div className="rFormContainer">
            <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
            <form className='registerForm' onSubmit={handleSubmit}>
                <h1>Register</h1>

                <div className="username">
                    <h2>Username</h2>
                    <input type='text' name="username" placeholder='Enter Username' value={formValues.username} onChange={handleInput}></input>
                </div>
                {formErrors.username && <p>{formErrors.username}</p>}

                <div className="email">
                    <h2>Email</h2>
                    <input type='email' name="email" placeholder='Enter Email' value={formValues.email} onChange={handleInput}></input>
                </div>
                {formErrors.email && <p>{formErrors.email}</p>}

                <div className="password">
                    <h2>Password</h2>
                    <input type='password' name="password" placeholder='Enter Password' value={formValues.password} onChange={handleInput}></input>
                </div>
                {formErrors.password && <p>{formErrors.password}</p>}

                <div className="rButtons">
                    <Link to="/">Login</Link>
                    <button type='submit'>Submit</button>
                </div>

            </form>
        </div>
    );
}

export default RegisterPage;
