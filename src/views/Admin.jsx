import React from "react";
import { Routes, Route } from "react-router-dom";

// import layout admin
import AdminLayout from "@/layouts/AdminLayout";

// import dashboard
import { Cms, Crm, Analytics, Sales, Hosting, Saas, Marketing, Ecommerce, Projects } from "@/views/dashboard/";
// import ecommerce
import { Checkout, Customers, Invoice, OrderDetail, Orders, ProductDetail, Products, Sellers, ShoppingCart } from "@/views/ecommerce";
// import project
import { CreateProject, Kanban, ProjectDetail, ProjectLists } from "@/views/project";
// import pages
import { NotFound, Faq, Pricing, Profile, Services, Starter } from "@/views/pages";
// Import App
import  Widgets from  "@/views/app/Widgets";

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

        {/* App */}
        <Route exact path="/app/widgets/*" element={<Widgets />} />
        
        {/* Ecommerce */}
        <Route exact path="/ecommerce/products/*" element={<Products />} />
        <Route exact path="/ecommerce/product-detail/*" element={<ProductDetail />} />
        <Route exact path="/ecommerce/orders/*" element={<Orders />} />
        <Route exact path="/ecommerce/order-detail/*" element={<OrderDetail />} />
        <Route exact path="/ecommerce/sellers/*" element={<Sellers />} />
        <Route exact path="/ecommerce/customers/*" element={<Customers />} />
        <Route exact path="/ecommerce/shopping-cart/*" element={<ShoppingCart />} />
        <Route exact path="/ecommerce/checkout/*" element={<Checkout />} />
        <Route exact path="/ecommerce/invoice/*" element={<Invoice/>} />

        {/* Projects */}
        <Route exact path="/project/project-lists/*" element={<ProjectLists />} />
        <Route exact path="/project/project-detail/*" element={<ProjectDetail />} />
        <Route exact path="/project/kanban/*" element={<Kanban />} />
        <Route exact path="/project/create-project/*" element={<CreateProject />} />

        {/* Pages */}
        <Route exact path="/pages/profile/*" element={<Profile />} />
        <Route exact path="/pages/services/*" element={<Services />} />
        <Route exact path="/pages/faq/*" element={<Faq />} />
        <Route exact path="/pages/pricing/*" element={<Pricing />} />
        <Route exact path="/pages/404/*" element={<NotFound />} />
        <Route exact path="/pages/starter/*" element={<Starter />} />
      </Routes>
    </AdminLayout>
  );
}
