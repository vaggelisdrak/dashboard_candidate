import React from "react";
import { Routes, Route } from "react-router-dom";

// import layout admin
import AdminLayout from "@/layouts/AdminLayout";

// import dashboard
import { Cms, Crm, Analytics, Sales, Hosting, Saas, Marketing, Ecommerce, Projects } from "@/views/dashboard/";

// Import App

export default function Admin() {
  return (
    <AdminLayout>
      <Routes>
        {/* dashboard  */}
        <Route exact path="/home/cms/*" element={<Cms />} />
        <Route exact path="/home/analytics/*" element={<Analytics />} />
        <Route exact path="/home/saas/*" element={<Saas />} />
        <Route exact path="/home/sales/*" element={<Sales />} />
        <Route exact path="/home/crm/*" element={<Crm />} />
        <Route exact path="/home/marketing/*" element={<Marketing />} />
        <Route exact path="/home/projects/*" element={<Projects />} />
        <Route exact path="/home/ecommerce/*" element={<Ecommerce />} />
        <Route exact path="/home/hosting/*" element={<Hosting />} />

      </Routes>
    </AdminLayout>
  );
}
