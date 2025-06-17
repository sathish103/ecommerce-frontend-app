import React, { useEffect, useState } from "react";
import productService from "../../services/productService";
import ProductGrid from "../../components/product/ProductGrid";
import Loader from "../../components/common/Loader";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getAllProducts();
        setProducts(data);
      } catch (err) {
        console.error("Error loading products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Products</h2>
      {loading ? <Loader /> : <ProductGrid products={products} />}
    </div>
  );
};

export default ProductList;
