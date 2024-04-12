function LoginPage(){
    return(
        <div className="loginForm">
            <h1>Login</h1>
            <div className="email">
                <h2>Username</h2>
                <input className="emailInput"></input>
            </div>
            <div className="password">
                <h2>Password</h2>
                <input className="passInput"></input>
            </div>
            <div className="lButtons">
                <button onClick={cReg}>Register</button>
                <button onClick={logSubmit}>submit</button>
            </div>
        </div>
    );
}

function cReg(){
    window.location.href = "RegisterPage.js";
}
function logSubmit(){
    window.alert("Login Success");
}
export default LoginPage;
