import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Login from './pages/login';
import Task from './pages/task';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/task' element={<Task/>} />
        <Route path='/login' element={<Login/>} />
    </Routes>
    </Router>
);
}
  
export default App;