// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Greeting from "./components/Greeting";
import About from "./components/About";
import Experience from "./components/Experience";
import ProjectList from "./components/ProjectList";
// import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Greeting />
      <About />
      <Experience />
      <ProjectList />

      {/* <Router>
        <Routes>
          <Route path="/" element={<Greeting />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router> */}

      <Footer />
    </>
  );
}

export default App;
