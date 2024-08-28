// import '@fortawesome/fontawesome-free/css/all.min.css';
//  import React from "react";


// function  OurStore(){
//     return<>
//     <h3 className="mt-2">Ourstore component</h3>



//     <footer style={{ backgroundColor: "#333", color: "#fff", padding: "20px", textAlign: "center" }}>
//         <div className="container">
//           <div className="row">
//             <div className="col-md-4">
//               <h5>About Us</h5>
//               <p>At Fitness Tracker Inc., we re dedicated to helping you achieve your fitness goals with innovative tools and personalized insights. Join us in making fitness a part of your daily routine.</p>
//             </div>
//             <div className="col-md-4">
//               <h5>Quick Links</h5>
//               <ul className="list-unstyled">
//                 <li><a href="#about" style={{ color: "#fff" }}>About Us</a></li>
//                 <li><a href="#services" style={{ color: "#fff" }}>Services</a></li>
//                 <li><a href="#contact" style={{ color: "#fff" }}>Contact</a></li>
//                 <li><a href="#privacy" style={{ color: "#fff" }}>Privacy Policy</a></li>
//               </ul>
//             </div>
//             <div className="col-md-4">
//               <h5>Follow Us</h5>
//               <div>
//                 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", margin: "0 10px" }}>
//                   <i className="fab fa-facebook-f"></i>
//                 </a>
//                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", margin: "0 10px" }}>
//                   <i className="fab fa-twitter"></i>
//                 </a>
//                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", margin: "0 10px" }}>
//                   <i className="fab fa-instagram"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <hr style={{ borderColor: "#555" }} />
//           <p>© 2024 Fitness Tracker Inc. All rights reserved.</p>
//         </div>
//       </footer>
//     </>
// }
    
// export default OurStore;


import '@fortawesome/fontawesome-free/css/all.min.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from "react";
import CheckoutForm from './CheckoutForm';
// import CheckoutForm from './components/CheckoutForm'; 



const stripePromise = loadStripe('your-publishable-key-from-stripe');

function OurStore() {
  return (
    <>
      <h3 className="mt-2">Ourstore component</h3>

      <div style={{ margin: '20px auto', maxWidth: '600px' }}>
        <h2>Purchase Our Products</h2>
        <p>Complete your purchase by clicking the button below:</p>
        <Elements stripe={stripePromise}>
          <CheckoutForm /> {/* This is the component where you define the payment form */}
        </Elements>
      </div>

      <footer style={{ backgroundColor: "#333", color: "#fff", padding: "20px", textAlign: "center" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>About Us</h5>
              <p>At Fitness Tracker Inc., we are dedicated to helping you achieve your fitness goals with innovative tools and personalized insights. Join us in making fitness a part of your daily routine.</p>
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

export default OurStore;
