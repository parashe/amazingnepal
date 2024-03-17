import React from "react";
import "./App.css";
import { HomePage } from "./Pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DestinationDetailsPage } from "./Pages/destinationdetails";
import { NepalPage } from "./Pages/nepal";
import { ServiceDetailsPage } from "./Pages/servicedetails";
import { ContactPage } from "./Pages/contact";
import { GalleryPage } from "./Pages/gallery";
import { DestinationPage } from "./Pages/destinationPage";
import ServicePage from "./Pages/service";
import { AboutPage } from "./Pages/about";
import { RecommendedDetailsPage } from "./Pages/recommendedDetails";
import AuthProvider from "./Lib/Context/Authcontext";
// import ServicePage from "./Pages/service";


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="destinationdetails"
            element={<DestinationDetailsPage />}
          />
          <Route path="destination" element={<DestinationPage />} />
          <Route path="destination/:id" element={<DestinationDetailsPage />} />
          <Route path="recommended/:id" element={<RecommendedDetailsPage/>} />
          <Route path="nepal" element={<NepalPage />} />
          <Route path="services/:id" element={<ServiceDetailsPage />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
