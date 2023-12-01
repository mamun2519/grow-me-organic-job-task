import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Singup from "./components/auth/Singup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singup" element={<Singup />} />
      </Routes>
    </>
  );
}

export default App;
