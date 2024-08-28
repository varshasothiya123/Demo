



import 'bootstrap/dist/css/bootstrap.min.css'; 
import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css'; 

function Services() {
  return (
    <>
      <div style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden"
      }}>
        <img
          src="https://www.anytimefitness.com/wp-content/uploads/2023/11/homepage-hero-afp-december-treadmill-1x.webp"
          alt="Fitness Tracker Services"
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
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "#fff",
          padding: "20px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: "8px",
          width: "80%",
          maxWidth: "600px"
        }}>
          <h1>Our Fitness Tracker Services</h1>
          <p>we offer a range of services to help you achieve your goals </p>
          <h1>Personal Trainer</h1>
          <p>A personal trainer is an individual who creates and effective exercise program for health</p>
          <h1>Our Store</h1>
          <p>Our store provides best quality provide or services to all customers in very bet range</p>
          <h1>Fitness Equipment Technician</h1>
          <p>perform daily,weekly and monthly preventative maintenance checks and services on equipment</p>
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

export default Services;

