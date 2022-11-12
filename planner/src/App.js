import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Count from './pages/count';
import Login from './pages/login';
import Register from './pages/register';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/count' element={<Count/>} />
        <Route path = '/login' element ={<Login/>} />
        <Route path = '/register' element ={<Register/>} />
    </Routes>
    </Router>
);
}
  
export default App;