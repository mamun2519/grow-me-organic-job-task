import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Singup from "./components/auth/Singup";
import RequireAuth from "./components/auth/RequireAuth";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path="/singup" element={<Singup />} />
      </Routes>
    </>
  );
}

export default App;
