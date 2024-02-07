import React from "react";
import "./App.css";
import { HomePage } from "./Pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DestinationPage } from "./Pages/destination";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
           
          </Route>
          <Route path="destination" element={<DestinationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
