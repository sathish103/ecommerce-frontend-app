import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productService from "../../services/productService";
import Loader from "../../components/common/Loader";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await productService.getProductById(id);
        setProduct(data);
      } catch (err) {
        console.error("Failed to load product:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <Loader />;

  if (!product) return <p className="text-center">Product not found.</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
      <img
        src={product.imageUrl || "/placeholder.jpg"}
        alt={product.name}
        className="w-full max-w-md h-auto rounded"
      />
      <p className="mt-4 text-gray-700">{product.description}</p>
      <p className="text-lg font-semibold mt-2">₹{product.price}</p>
    </div>
  );
};

export default ProductDetail;
