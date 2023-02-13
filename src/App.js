import React, { useState, useEffect, lazy, Suspense } from "react";
import Preloader from "../src/components/Pre";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home/Home";
// import Chat from "./components/Home/chat";
// import About from "./components/About/About";
// import Projects from "./components/Projects/Projects";
// import Footer from "./components/Footer";




import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// const Preloader = lazy(() => import("../src/components/Pre"));
const Home = lazy(() => import("./components/Home/Home"));
const Navbar = lazy(() => import("./components/Navbar"));
const Certification = lazy(() => import("./components/Certification/Certification"));
const Resume = lazy(() => import("./components/Resume/ResumeNew"));
const Footer = lazy(() => import("./components/Footer"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const About = lazy(() => import("./components/About/About"));
const Chat = lazy(() => import("./components/Home/chat"));

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (

    <Suspense fallback={<Preloader />}>
      <Router>
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/Certification" element={<Certification />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
