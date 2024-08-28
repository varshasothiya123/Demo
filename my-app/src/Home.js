// import React from 'react'

//  function Home() {
//   return (
//     <>
//       <h1>Home</h1>
//     </>
//   )
// }
//  export default Home;



import '@fortawesome/fontawesome-free/css/all.min.css';
import React from "react";
function Home() {
  return (
    <>
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Welcome to the Home Component</h1>
      <img 
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSssskbR2gLKYX8iJd0cAU4eVST5nFNcp_eKw&s" 
        alt="Home Page" 
        style={{ width: "100%", height: "auto", maxWidth: "600px" }}
      />
    </div>

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

    </>
  );
}

export default Home;
