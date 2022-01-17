import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Homepage from './pages/homepage/Homepage';
import Register from './pages/register-login/Register';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
