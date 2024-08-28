
import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Home from './Home';
 import Login from './Login';
// import Payment from './Payment';
import { UserProvider } from './UserContext';
import About from './components/About';
import BMI from './components/BMI';
import Exercises from './components/Exercises';
import Header from './components/Header';
import Home from './components/Home';
import OurStore from './components/OurStore';
import Profile from './components/Profile';
import Services from './components/Services';
import UserExercises from './components/UserExercises';
import Category from './components/category';
import Signup from './signup';

function App() {
  return (
    
    <>
 <UserProvider>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/category" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/Ourstore" element={<OurStore />} />
        <Route path="/services" element={<Services />} />
        <Route path="/user-exercises" element={<UserExercises />} />
        <Route path="/bmi" element={<BMI />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/payment" element={<Payment />} /> */}
      </Routes>
      </UserProvider>
    </>
  );
}

export default App;

