import React from "react";
import "./App.css";
import { HomePage } from "./Pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DestinationDetailsPage } from "./Pages/destinationdetails";
import { NepalPage } from "./Pages/nepal";

import { ContactPage } from "./Pages/contact";
import { GalleryPage } from "./Pages/gallery";
import { DestinationPage } from "./Pages/destinationPage";
import { ServicePage } from "./Pages/service";
import { AboutPage } from "./Pages/about";
import { FAQPage } from "./Pages/faq";
import { RecommendedDetailsPage } from "./Pages/recommendedDetails";
import { RecommendedListPage } from "./Pages/recommendedList";
import AuthProvider from "./Lib/Context/Authcontext";
import { SEO } from "./Components/SEO";

function App() {
  return (
    <div className="App min-h-screen bg-gray-50 dark:bg-gray-900">
      <AuthProvider>
      <BrowserRouter>
        <SEO />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="destinationdetails"
            element={<DestinationDetailsPage />}
          />
          <Route path="destination" element={<DestinationPage />} />
          <Route path="destination/:id" element={<DestinationDetailsPage />} />
          <Route path="recommended" element={<RecommendedListPage />} />
          <Route path="recommended/:id" element={<RecommendedDetailsPage/>} />
          <Route path="nepal" element={<NepalPage />} />
          
          <Route path="service" element={<ServicePage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
