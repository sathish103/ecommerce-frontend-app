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

  return (
    <div className="p-4">
      {loading ? (
        <Loader />
      ) : (
        <>
          <DiscountBanner
            title={discount?.title || "Get 20% OFF!"}
            description={
              discount?.description || "Use code SAVE20 at checkout."
            }
          />

          <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
          <ProductGrid products={products} />
        </>
      )}
    </div>
  );
};

export default Home;
