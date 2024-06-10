import Greeting from "./components/Greeting";
import About from "./components/About";
import Experience from "./components/Experience";
import ProjectList from "./components/ProjectList";
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
      <Footer />
    </>
  );
}

export default App;
