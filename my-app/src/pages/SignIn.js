// SignIn.js
import {React, useState, useEffect} from 'react';
import './SignIn.css';
import graphicSVG from '../components/images/graphicSVG.svg'; // Import your SVG file
import Validation from '../components/log_in_out/LoginValidation';

const SignIn = () => {

  const initialValues = { email: "", password: "" };
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
  }, [formErrors, isSubmit, formValues]);
  return (
    <div className="login-container">
      <div className="left-section">
        <br/>
        <h2 className='slogan'>Cultivating a healthier tomorrow, one login at a time.</h2>
        <br/><br/><br/>
        <div className="left-bottom-section">
        <img src={graphicSVG} alt="Graphic" className="graphic-image" />
      </div>
      </div>
   
      <div className="right-section">
        {/* Registration form goes here */}
        <h1 className='slogan-2'>Login for more content!</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          {/* Input fields */}
          <label>
            Email:
            <input type="email" name="email" value={formValues.email} onChange={handleInput}/>
          </label>
            <div className='emaiError'>
              {formErrors.email && <p>{formErrors.email}</p>}
            </div>
          
          <label>
            Password:
            <input type="password" name="password" value={formValues.password} onChange={handleInput}/>
          </label>
            <div className='passwordError'>
              {formErrors.password && <p>{formErrors.password}</p>}
            </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
