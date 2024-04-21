import React, { useState } from 'react';

const EditProf = () => { // Rename the function to start with an uppercase letter
    // Retrieve current user data from localStorage
    const cuData = JSON.parse(localStorage.getItem("currentUser"));
    const { username, email, password } = cuData;

    // Initialize state with current user data
    const [inputValue, setInputValue] = useState({ username, email, password });

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
                <label>Username: </label>
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
                {/* Add onSubmit handler for form submission */}
                <button>Edit</button> <button>Cancel</button>
            </div>
        </div>
    );
};

export default EditProf; // Export the component with the corrected name
