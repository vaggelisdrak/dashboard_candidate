import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// layouts
import Admin from "@/views/Admin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* add routes with layouts */}
        <Route path="/dashboard/*" element={<Admin />} />
        
        {/* add redirect for first page */}
        <Route path="*" element={<Navigate to="/dashboard/home/cms" replace />} />
      </Routes>
    </BrowserRouter>
  )
}