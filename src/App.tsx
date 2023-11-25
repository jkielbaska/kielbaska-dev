import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, About, Contact, Projects } from "./pages";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <main className="font-inter scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-500">
      <Router>
        <Navbar />
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
