import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css'
import Home from './Screens/Home';
import ParentPage from './Screens/ParentPage';
import LessonsPage from './Screens/LessonsPage';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parent" element={<ParentPage />} />
          <Route path="/subject" element={<LessonsPage />} />
        
        </Routes>
      </Router>
    </>
  )
}

export default App
