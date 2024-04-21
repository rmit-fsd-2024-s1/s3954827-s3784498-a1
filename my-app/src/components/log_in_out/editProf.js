import React, { useState } from 'react';
import delProfile from './deleteProfile';
import { useNavigate } from 'react-router-dom';

const EditProf = () => {
    const navigate = useNavigate(); // Access navigation function

    // Retrieve current user data from localStorage
    const cuData = JSON.parse(localStorage.getItem("currentUser"));
    const { username, email, password, doj } = cuData;

    // Initialize state with current user data
    const [inputValue, setInputValue] = useState({ username, email, password, doj });

    const handleDelete = async () => {
        try {
            await delProfile(inputValue);
            // If delProfile runs successfully, navigate to the Sign In page
            navigate("/SignIn");
        } catch (error) {
            console.error("Error deleting profile:", error);
            // Handle any errors that occur during deletion
        }
    }

    const handleEdit = () => {
        window.alert("Editing profile zrzrzr");
        // Add your edit logic here
    }

    // Event handler to update input values
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div>
            <div>
                <h1>User Profile for {inputValue.username}</h1>
            </div>
            <div>
                <label>Date Joined: {inputValue.doj} </label>
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
