import React from "react";
import { Routes, Route } from "react-router-dom";

// import layout admin
import AdminLayout from "@/layouts/AdminLayout";

// import dashboard
import { Cms, Analytics, Ecommerce } from "@/views/dashboard/";

// Import App

export default function Admin() {
  return (
    <AdminLayout>
      <Routes>
        {/* dashboard  */}
        <Route exact path="/home/cms/*" element={<Cms />} />
        <Route exact path="/home/analytics/*" element={<Analytics />} />
        <Route exact path="/home/ecommerce/*" element={<Ecommerce />} />
        
      </Routes>
    </AdminLayout>
  );
}
