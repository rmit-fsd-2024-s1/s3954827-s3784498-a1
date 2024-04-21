import React, { useState, useEffect } from 'react';
import delProfile from './deleteProfile';
import eValidation from './editValidation';
import { useNavigate } from 'react-router-dom';

const EditProf = () => {

    const navigate = useNavigate(); // Access navigation function

    // Retrieve current user data from localStorage
    const cuData = JSON.parse(localStorage.getItem("currentUser"));
    
    const { username, email, password, doj } = cuData;

    // Initialize state with current user data
    const [inputValue, setInputValue] = useState({ username, email, password, doj });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleDelete = async () => {
        try {
            await delProfile(inputValue);
            navigate("/SignIn");
        } catch (error) {
            console.error("Error deleting profile:", error);
            // Handle any errors that occur during deletion
        }
    }

    const handleEdit = (e) => {
        e.preventDefault();
        setFormErrors(eValidation(inputValue));
        setIsSubmit(true);
    }

    // Event handler to update input values
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(inputValue);
        }
    }, [formErrors, isSubmit, inputValue]);
  

    return (
        <div>
            <div>
                <h1>User Profile for {username}</h1>
            </div>
            <div>
                <label>Date Joined: {inputValue.doj} </label>
            </div>
            <div>
                <label>User: </label>
                {/* Set 'name' attribute for form submission */}
                <input type='text' name='username' value={inputValue.username} onChange={handleChange}></input>
            </div>
            <div>
                <label>Email: </label>
                {/* Set 'name' attribute for form submission */}
                <input type='text' name='email' value={inputValue.email} onChange={handleChange}></input>
            </div>
            <div>
                <label>Password: </label>
                {/* Set 'name' attribute for form submission */}
                <input type='text' name='password' value={inputValue.password} onChange={handleChange}></input>
            </div>
            <div>
                <label></label>
            </div>
            <div>
                {/* Add onSubmit handler for form submission */}
                <button type='button' onClick={handleEdit}>Edit</button> <button type='button' onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

export default EditProf;
