import React, { useState , useEffect} from 'react';
import './Register.css'; // Import CSS file for styling
import placeholderImage from '../components/images/placeholder.png';
import graphicSVG from '../components/images/graphicSVG.svg'; // Import your SVG file
import Validation from '../components/log_in_out/RegisterValidation';

function Register() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const keysToCheck = ['username', 'email', 'password'];

  const handleInput = (e) => {
      setFormValues(prev => ({
          ...prev,
          [e.target.name]: e.target.value
      }));
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(Validation(formValues, keysToCheck));
      setIsSubmit(true);
  }

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
    }
}, [formErrors, isSubmit, formValues]);

  return (
    <div className="register-container">
      <div className="left-section">
        <br/>
        <h2 className='slogan'>Nature's goodness, delivered to your doorstep.</h2>
        <br/><br/><br/>
        <div className="left-bottom-section">
        <img src={graphicSVG} alt="Graphic" className="graphic-image" />
      </div>
      </div>
   
      <div className="right-section">
        {/* Registration form goes here */}
        <h1 className='slogan-2'>Register with us!</h1>
        <form className="registration-form" onSubmit={handleSubmit}>
          {/* Input fields */}
          <label>
            Username:
            <input type="text" name="username" value={formValues.username} onChange={handleInput}/>
          </label>
            <div className='userError'>
              {formErrors.username && <p>{formErrors.username}</p>}
            </div>

          <label>
            Email:
            <input type="email" name="email" value={formValues.email} onChange={handleInput}/>
          </label>
            <div className='emailError'>
              {formErrors.email && <p>{formErrors.email}</p>}
            </div>

          <label>
            Password:
            <input type="password" name="password" value={formValues.password} onChange={handleInput}/>
          </label>
            <div className='passError'>
              {formErrors.password && <p>{formErrors.password}</p>}
            </div>

          <button type="submit">Register</button>

        </form>
      </div>
    </div>
  );
}

export default Register;
