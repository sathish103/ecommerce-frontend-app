import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import searchService from "../../services/searchService";
import ProductGrid from "../../components/product/ProductGrid";
import Loader from "../../components/common/Loader";

const SearchResults = () => {
  const query = new URLSearchParams(useLocation().search).get("q");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const search = async () => {
      try {
        const data = await searchService.searchProducts(query);
        setResults(data);
      } catch (err) {
        console.error("Search failed:", err);
      } finally {
        setLoading(false);
      }
    };

    if (query) search();
  }, [query]);

  if (loading) return <Loader />;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Search Results</h2>
      {results.length === 0 ? (
        <p>No products found for "{query}"</p>
      ) : (
        <ProductGrid products={results} />
      )}
    </div>
  );
};

export default SearchResults;
