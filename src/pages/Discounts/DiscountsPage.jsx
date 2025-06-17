import React, { useEffect, useState } from "react";
import discountService from "../../services/discountService";
import Loader from "../../components/common/Loader";

const DiscountsPage = () => {
  const [discounts, setDiscounts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDiscounts = async () => {
      try {
        const data = await discountService.getAllDiscounts();
        setDiscounts(data);
      } catch (err) {
        console.error("Failed to load discounts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDiscounts();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Available Discounts</h2>
      {discounts.length === 0 ? (
        <p>No active discounts.</p>
      ) : (
        <ul>
          {discounts.map((discount) => (
            <li key={discount.id} className="mb-2">
              <strong>{discount.code}</strong>: {discount.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DiscountsPage;
