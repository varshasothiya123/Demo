
// import React, { useContext } from 'react';
// import { UserContext } from '../UserContext';
// import './Profile.css';

// function Profile() {
//   const { user } = useContext(UserContext);

//   return (
//     <div className="container mt-5">
//       {user ? (
//         <div className="profile-container">
//           <h3>User Profile</h3>
//           <div className="profile-info">
//             <p><strong>Username:</strong> {user.username}</p>
//             <p><strong>Email:</strong> {user.email}</p>
//             <p><strong>Phone Number:</strong> {user.phone_no}</p>
//             <p><strong>Address:</strong> {user.address}</p>
//           </div>
//         </div>
//       ) : (
//         <div className="no-user">
//           <p>No user data available. Please log in or sign up to view your profile.</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Profile;


import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import './Profile.css';

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <>
    <div className="profile-page">
      <div className="profile-container">
        {user ? (
          <div className="profile-info">
            <h3>User Profile</h3>
            <div className="profile-details">
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone Number:</strong> {user.phone_no}</p>
              <p><strong>Address:</strong> {user.address}</p>
            </div>
          </div>
        ) : (
          <div className="no-user">
            <p>No user data available. Please log in or sign up to view your profile.</p>
          </div>
        )}
      </div>
    </div>

<div>
    <footer style={{ backgroundColor: "#333", color: "#fff", padding: "20px", textAlign: "center" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>About Us</h5>
              <p>At Fitness Tracker Inc., we re dedicated to helping you achieve your fitness goals with innovative tools and personalized insights. Join us in making fitness a part of your daily routine.</p>
            </div>
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#about" style={{ color: "#fff" }}>About Us</a></li>
                <li><a href="#services" style={{ color: "#fff" }}>Services</a></li>
                <li><a href="#contact" style={{ color: "#fff" }}>Contact</a></li>
                <li><a href="#privacy" style={{ color: "#fff" }}>Privacy Policy</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Follow Us</h5>
              <div>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", margin: "0 10px" }}>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", margin: "0 10px" }}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", margin: "0 10px" }}>
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <hr style={{ borderColor: "#555" }} />
          <p>© 2024 Fitness Tracker Inc. All rights reserved.</p>
        </div>
      </footer>
      </div>
    </>


  );
}

export default Profile;
