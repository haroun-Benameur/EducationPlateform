import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Home from "./Screens/Home";
import ParentPage from "./Screens/ParentPage";
import LessonsPage from "./Screens/LessonsPage";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Profile from "./Screens/Profile";
import NotFound from "./Screens/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import QuizPage from "./Screens/QuizzPage";
import MazePage from "./Screens/TestLevel/MazePage ";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parent" element={isAuthenticated ? <ParentPage /> : <Navigate to="/login" />} />
          <Route path="/subject" element={<LessonsPage />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/quizzes" element={<QuizPage />} />
          <Route path="/mazes" element={<MazePage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
