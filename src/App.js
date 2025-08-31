import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPortal from "./AdminPortal/AdminPortal";
import EducatorDetails from "./AdminPortal/EducatorDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminPortal />} />
        <Route path="/educator/:id" element={<EducatorDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
