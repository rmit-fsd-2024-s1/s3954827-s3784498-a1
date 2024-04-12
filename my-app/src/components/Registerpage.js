function RegisterPage(){
    return(
        <div className="loginForm">
            <h1>Register</h1>
            <div className="email">
                <h2>Username</h2>
                <input className="emailInput"></input>
            </div>
            <div className="password">
                <h2>Password</h2>
                <input className="passInput"></input>
            </div>
            <div className="rButtons">
                <button onClick={cLog}>Login</button>
                <button onClick={regSubmit}>submit</button>
            </div>
        </div>
    );
}

function cLog(){
    window.location.href = "LoginPage.js";
}
function regSubmit(){
    window.alert("Registration Success");
}

export default RegisterPage;
