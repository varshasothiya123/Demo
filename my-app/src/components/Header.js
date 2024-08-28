
//
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from '../UserContext';


function Header() {
  const { user, logoutUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate('/login'); 
  };

  return (
    <div className="bg-dark d-flex justify-content-around align-items-center" style={{ height: "70px" }}>
      <Link to="/"><small style={{ cursor: "pointer", color: "#fff" }}>Home</small></Link>
      <Link to="/about"><small style={{ cursor: "pointer", color: "#fff" }}>About</small></Link>
      <Link to="/services"><small style={{ cursor: "pointer", color: "#fff" }}>Services</small></Link>
      
      {!user && (
        <>
          <Link to="/login"><small style={{ cursor: "pointer", color: "#fff" }}>Login</small></Link>
          <Link to="/signup"><small style={{ cursor: "pointer", color: "#fff" }}>Signup</small></Link>
        </>
      )}

      {user && (
        <>
          <Link to="/Ourstore"><small style={{ cursor: "pointer", color: "#fff" }}>OurStore</small></Link>
          <Link to="/exercises"><small style={{ cursor: "pointer", color: "#fff" }}>Exercises</small></Link>
          <Link to="/userexercises"><small style={{ cursor: "pointer", color: "#fff" }}>UserExercises</small></Link>
          <Link to="/profile"><small style={{ cursor: "pointer", color: "#fff" }}>Profile</small></Link>
          <Link to="/bmi"><small style={{ cursor: "pointer", color: "#fff" }}>BMI Calculator</small></Link>
          <button onClick={handleLogout} className="bg-danger" style={{ height: "30px", width: "100px", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
            Logout
          </button>
        </>
      )}
    </div>
  );
}

export default Header;
