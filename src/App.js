
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Screens/Home';
import Workout from './Screens/Workout';
import Diet from './Screens/Diet';
import Signup from './Screens/Signup';
import Login from './Screens/Login';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/workout" element={<Workout/>} />
          <Route path="/diet" element={<Diet />}/>
          <Route path="/register" element={<Signup/>} />
          <Route path="/login" element={<Login />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
