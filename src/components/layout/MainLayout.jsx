// src/components/layout/MainLayout.jsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => (
  <>
    <Header />
    <main className="min-h-screen p-4">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default MainLayout;
