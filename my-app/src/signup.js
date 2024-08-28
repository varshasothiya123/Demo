


// import axios from 'axios';
// import React, { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { UserContext } from './UserContext';
// import './signup.css';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     phone_no: '',
//     address: '',
//   });
//   const [errors, setErrors] = useState({});
//   const [successMessage, setSuccessMessage] = useState('');
//   const { loginUser } = useContext(UserContext);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrors({});
//     try {
//       const response = await axios.post('http://localhost:3000/user/signup', formData, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       if (response.status === 201) {
//         setSuccessMessage('Signup successful!');
//         loginUser(response.data.user); 
//         setTimeout(() => {
//           navigate('/'); 
//         }, 2000);
//       }
//     } catch (error) {
//       if (error.response && error.response.data.errors) {
//         setErrors(
//           error.response.data.errors.reduce((acc, err) => {
//             acc[err.param] = err.msg;
//             return acc;
//           }, {})
//         );
//       } else {
//         console.error('Signup error', error);
//       }
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
       
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//           />
//           {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
//         </div>
//         <div>
//           <label>Phone Number:</label>
//           <input
//             type="text"
//             name="phone_no"
//             value={formData.phone_no}
//             onChange={handleChange}
//           />
//           {errors.phone_no && <p style={{ color: 'red' }}>{errors.phone_no}</p>}
//         </div>
//         <div>
//           <label>Address:</label>
//           <input
//             type="text"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//           />
//           {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}
//         </div>
//         <button type="submit">Sign Up</button>
//       </form>
//       {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
//     </div>
//   );
// };

// export default Signup;

import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css'; 
import { UserContext } from './UserContext';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phone_no: '',
    address: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    try {
      const response = await axios.post('http://localhost:3000/user/signup', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 201) {
        setSuccessMessage('Signup successful!');
        loginUser(response.data.user);
        setTimeout(() => {
          navigate('/');
        }, 2000);
      }
    } catch (error) {
      if (error.response && error.response.data.errors) {
        setErrors(
          error.response.data.errors.reduce((acc, err) => {
            acc[err.param] = err.msg;
            return acc;
          }, {})
        );
      } else {
        console.error('Signup error', error);
      }
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <p className="error">{errors.username}</p>}
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="text"
              name="phone_no"
              value={formData.phone_no}
              onChange={handleChange}
            />
            {errors.phone_no && <p className="error">{errors.phone_no}</p>}
          </div>
          <div>
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && <p className="error">{errors.address}</p>}
          </div>
          <button type="submit">Sign Up</button>
        </form>
        {successMessage && <p className="success">{successMessage}</p>}
      </div>
    </div>
  );
};

export default Signup;

