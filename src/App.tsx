import React from "react";
import "./App.css";
import { HomePage } from "./Pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DestinationDetailsPage } from "./Pages/destinationdetails";
import { NepalPage } from "./Pages/nepal";
import { ServicePage } from "./Pages/service";
import { ContactPage } from "./Pages/contact";
import { GalleryPage } from "./Pages/gallery";
import { DestinationPage } from "./Pages/destinationPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="destinationdetails"
            element={<DestinationDetailsPage />}
          />
          <Route path="destination" element={<DestinationPage />} />
          <Route path="destination/:id" element={<DestinationDetailsPage />} />
          <Route path="nepal" element={<NepalPage />} />
          <Route path="services/:id" element={<ServicePage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
