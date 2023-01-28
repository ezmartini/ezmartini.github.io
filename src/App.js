import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout.mjs";
import "bootstrap/dist/css/bootstrap.min.css";
import Page from "./pages/Page.mjs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout className="layout" />} />
        <Route path="/about" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
