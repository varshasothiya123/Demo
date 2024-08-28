

// import React, { useState } from 'react';
// function BMI() {
//     const [weight, setWeight] = useState('');
//     const [height, setHeight] = useState('');
//     const [bmi, setBMI] = useState(null);
//     const [message, setMessage] = useState('');

//     const calculateBMI = () => {
//         if (weight > 0 && height > 0) {
//             const heightInMeters = height / 100; 
//             const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
//             setBMI(bmiValue);

//             let bmiMessage = '';
//             if (bmiValue < 18.5) {
//                 bmiMessage = 'Underweight';
//             } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
//                 bmiMessage = 'Normal weight';
//             } else if (bmiValue >= 25 && bmiValue < 29.9) {
//                 bmiMessage = 'Overweight';
//             } else {
//                 bmiMessage = 'Obesity';
//             }
//             setMessage(bmiMessage);
//         } else {
//             setBMI(null); // Reset BMI and message if inputs are invalid
//             setMessage('');
//             alert('Please enter valid weight and height');
//         }
//     };

//     return (
//         <div style={{ textAlign: 'center', marginTop: '50px' }}>
//             <h2>BMI Calculator</h2>
//             <div style={{ marginBottom: '20px' }}>
//                 <input 
//                     type="number" 
//                     placeholder="Weight in kg" 
//                     value={weight}
//                     onChange={(e) => setWeight(e.target.value)} 
//                     style={{ marginRight: '10px', padding: '10px' }}
//                 />
//                 <input 
//                     type="number" 
//                     placeholder="Height in cm" 
//                     value={height}
//                     onChange={(e) => setHeight(e.target.value)} 
//                     style={{ padding: '10px' }}
//                 />
//             </div>
//             <button 
//                 onClick={calculateBMI} 
//                 style={{ padding: '10px 20px', fontSize: '16px' }}>
//                 Calculate BMI
//             </button>
//             {bmi && (
//                 <div style={{ marginTop: '20px' }}>
//                     <h3>Your BMI: {bmi}</h3>
//                     <p>{message}</p>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default BMI;



import React, { useState } from 'react';
import './BMI.css';
function BMI() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBMI] = useState(null);
    const [message, setMessage] = useState('');

    const calculateBMI = () => {
        if (weight > 0 && height > 0 && age > 0) {
            const heightInMeters = height / 100; 
            const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
            setBMI(bmiValue);

            let bmiMessage = '';
            if (bmiValue < 18.5) {
                bmiMessage = 'Underweight';
            } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
                bmiMessage = 'Normal weight';
            } else if (bmiValue >= 25 && bmiValue < 29.9) {
                bmiMessage = 'Overweight';
            } else {
                bmiMessage = 'Obesity';
            }
            setMessage(bmiMessage);
        } else {
            setBMI(null);
            setMessage('');
            alert('Please enter valid information');
        }
    };

    return (
    <>
        <div className="bmi-container">
            <h2>BMI Calculator</h2>
            <div className="input-group">
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                    className="input-field"
                />
                <input 
                    type="number" 
                    placeholder="Age" 
                    value={age}
                    onChange={(e) => setAge(e.target.value)} 
                    className="input-field"
                />
                <select 
                    value={gender}
                    onChange={(e) => setGender(e.target.value)} 
                    className="input-field"
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <input 
                    type="number" 
                    placeholder="Weight in kg" 
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)} 
                    className="input-field"
                />
                <input 
                    type="number" 
                    placeholder="Height in cm" 
                    value={height}
                    onChange={(e) => setHeight(e.target.value)} 
                    className="input-field"
                />
            </div>
            <button 
                onClick={calculateBMI} 
                className="calculate-button"
            >
                Calculate BMI
            </button>
            {bmi && (
                <div className="result">
                    <h3>{name}, your BMI is: {bmi}</h3>
                    <p>{message}</p>
                </div>
            )}
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

export default BMI;
