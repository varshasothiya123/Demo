

import React from "react";

function About() {
  return (
    <>
      <div style={{ 
        position: "relative", 
        width: "100vw", 
        height: "100vh",
        overflow: "hidden"
      }}>
        <img 
          src="https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="About Page" 
          style={{ 
            width: "100%", 
            height: "100%", 
            objectFit: "cover", 
            position: "absolute", 
            top: 0, 
            left: 0,
            zIndex: -1 
          }}
        />
        <div style={{ 
          position: "absolute", 
          top: "50%", 
          left: "4%", 
          transform: "translateY(-50%)", // Center vertically
          textAlign: "left", 
          color: "#fff",
          padding: "20px", 
          backgroundColor: "rgba(0, 0, 0, 0.5)", 
          borderRadius: "8px",
          width: "60%", 
          maxWidth: "600px"
        }}>
          <h1>About Our Fitness Tracker</h1>
          <p>
            Track your fitness journey with ease using our app. Monitor activities, log workouts, and keep an eye on your diet. Achieve your fitness goals with personalized insights and progress tracking. Join us in living a healthier life!
          </p>
        </div>
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

export default About;
