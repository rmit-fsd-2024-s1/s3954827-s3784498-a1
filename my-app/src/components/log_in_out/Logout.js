
import { useNavigate } from 'react-router-dom';

function logout(){
    const navigate = useNavigate();
    localStorage.removeItem('currentUser');
    navigate("/");

}
export default logout;