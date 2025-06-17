import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center text-sm text-gray-600 py-3 mt-6">
      © {new Date().getFullYear()} eShop. All rights reserved.
    </footer>
  );
};

export default Footer;
