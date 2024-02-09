import React from "react";
import "./App.css";
import { HomePage } from "./Pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DestinationPage } from "./Pages/destination";
import { NepalPage } from "./Pages/nepal";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
           
          </Route>
          <Route path="destination" element={<DestinationPage />} />
          <Route path="nepal" element={<NepalPage/>} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
