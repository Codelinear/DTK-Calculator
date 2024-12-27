import "./App.css";

import { BrowserRouter, Routes, Route, Switch, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import Form from "./components/form/Form";
import Email from "./components/email-capture/Email";
import ServicePage from "./components/pages/services/ServicePage";
import Service from "./components/services/Service";
import SummaryPage from "./components/SummaryPage/SummaryPage";
import Final from "./components/pages/Final/Final";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/email-capture" element={<Email />} />
          <Route path="/services/:id" element={<ServicePage />} />
          <Route path="/services" element={<Service />} />
          <Route path="/summary" element={<SummaryPage />} />
          <Route path="/final" element={<Final />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
