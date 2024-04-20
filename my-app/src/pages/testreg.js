function testReg(){
    const userData = JSON.parse(localStorage.getItem('test@test.com'));
    const e = "test@test.com";
    const p = "Testpassword01!";

    if(userData) {
        const { username, email, password } = userData;
        if (email !== e) {
            console.log("Email doesnt exist") ;
        }
        if (password !== p) {
            console.log("Password doesnt exist") ;
        }
        else if(email === e && password === p){
            console.log("success");
        }
    } 
}
export default testReg; 