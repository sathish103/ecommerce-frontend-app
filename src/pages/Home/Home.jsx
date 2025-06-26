// src/pages/Home/Home.jsx

import React, { useEffect, useState } from "react";
import ProductGrid from "../../components/product/ProductGrid";
import DiscountBanner from "../../components/common/DiscountBanner";
import Loader from "../../components/common/Loader";
import productService from "../../services/productService";
import discountService from "../../services/discountService";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [discount, setDiscount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const productData = await productService.getAllProducts();
        const discountData = await discountService.getActiveDiscounts();
        setProducts(productData);
        if (discountData.length > 0) {
          setDiscount(discountData[0]);
        }
      } catch (err) {
        console.error("Failed to load home data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DiscountBanner
      title={discount?.title || "Get 20% OFF!"}
      description={discount?.description || "Use code SAVE20 at checkout."}
      products={products}
    />
  );
};

export default Home;
