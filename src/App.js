import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout.mjs";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About.mjs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout className="layout" />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
