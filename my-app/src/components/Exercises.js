

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); 
  const [limit, setLimit] = useState(10); 

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://exercisedb.p.rapidapi.com/exercises', {
          params: {
            page: page,
            limit: 200
          },
          headers: {
            'x-rapidapi-key': 'aeacb2f81dmsh2ea917c1b616330p11e55fjsn0c92c3db215d',
            'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
          },
        });
        setExercises(response.data);
      } catch (error) {
        console.error('Error fetching exercises:', error);
        setError('Failed to fetch exercises. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, [page, limit]); // Refetch when page or limit changes

  const handleAddExercise = async (exercise) => {
    try {
      const response = await axios.post('http://localhost:3000/api/exercises', exercise);
      console.log('Exercise added:', response.data);
    } catch (error) {
      console.error('Error adding exercise:', error);
    }
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (loading) {
    return <p>Loading exercises...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Exercise Tracker</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
          {exercises.map((exercise, index) => (
            <div
              key={index}
              style={{
                flex: '0 1 calc(50% - 30px)',
                boxSizing: 'border-box',
                border: '1px solid #ddd',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                minHeight: '400px',
              }}
            >
              {exercise.gifUrl ? (
                <img
                  src={exercise.gifUrl}
                  alt={exercise.name}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    marginBottom: '20px',
                  }}
                />
              ) : (
                <p style={{ marginBottom: '20px' }}>No image available</p>
              )}
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ marginBottom: '10px' }}>{exercise.name}</h3>
                <p style={{ marginBottom: '10px', color: '#555' }}>
                  Target: {exercise.target} <br />
                  Body Part: {exercise.bodyPart}
                </p>
              </div>
              <button
                onClick={() => handleAddExercise(exercise)}
                style={{
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '5px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  cursor: 'pointer',
                  fontSize: '16px',
                  marginTop: 'auto',
                }}
              >
                Add Exercise
              </button>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button onClick={handlePreviousPage} disabled={page === 1} style={{ marginRight: '10px' }}>
            Previous
          </button>
          <button onClick={handleNextPage}>Next</button>
        </div>
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
};

export default Exercises;

