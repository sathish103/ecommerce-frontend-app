import React, { useState } from "react";
import reviewService from "../../services/reviewService";

const AddReview = () => {
  const [review, setReview] = useState("");
  const [productId, setProductId] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await reviewService.addReview({ productId, review });
      setSuccess(true);
      setReview("");
      setProductId("");
    } catch (err) {
      console.error("Failed to submit review:", err);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Write a Review</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Product ID"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          className="border p-2 w-full"
          required
        />
        <textarea
          placeholder="Your review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="border p-2 w-full"
          required
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
      {success && <p className="text-green-600 mt-2">Review submitted successfully!</p>}
    </div>
  );
};

export default AddReview;
