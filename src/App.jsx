import { ClassNames } from "@emotion/react";
import "./App.css";
import Home from "./pages/homePage/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/registrationPage/Register";

function App() {
  return (
    <>
      <div className="bg-white">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
