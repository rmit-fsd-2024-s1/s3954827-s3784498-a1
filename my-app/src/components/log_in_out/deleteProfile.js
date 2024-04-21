
function delProfile() {
    const confirmed = window.confirm("ARE YOU SURE YOU WANT TO DELETE YOUR ACCOUNT?");
    if (confirmed) {
      window.alert("ACCOUNT DELETED, RETURNING TO HOMEPAGE");
      localStorage.removeItem('currentUser');
    } else {
      window.alert("phew that was a close one!");
    }
  }
  
  export default delProfile;