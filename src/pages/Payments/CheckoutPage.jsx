import React, { useEffect, useState } from "react";
import paymentService from "../../services/paymentService";
import Loader from "../../components/common/Loader";

const CheckoutPage = () => {
  const [checkoutResult, setCheckoutResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const processPayment = async () => {
      try {
        const result = await paymentService.processPayment();
        setCheckoutResult(result);
      } catch (err) {
        console.error("Payment failed:", err);
      } finally {
        setLoading(false);
      }
    };

    processPayment();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Payment Status</h2>
      {checkoutResult ? (
        <p className="text-green-600">Payment Successful! ✅</p>
      ) : (
        <p className="text-red-600">Payment Failed ❌</p>
      )}
    </div>
  );
};

export default CheckoutPage;
