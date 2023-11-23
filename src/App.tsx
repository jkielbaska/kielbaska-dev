import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, About, Contact, Projects } from "./pages";
// import { Navbar } from "./components/Navbar";

function App() {
  return (
    <main>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;