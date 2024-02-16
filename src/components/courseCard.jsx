import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import { Link } from "react-router-dom";
import "../App.css";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const filteredPosts = products.filter((post) => {
    return post.title.toLowerCase().includes(searchQuery.toLowerCase());
  });
  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Find course Here..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className="cardWraper">
        {filteredPosts.map((product) => (
          <div key={product.id} className="card">
            <img src={product.thumbnail} alt="Course Image" />
            <div className="card-content">
              <div className="course-title">{product.title}</div>
              <div className="course-description">{product.description}</div>
              <div className="course-price">{product.duration}</div>

              <Link to={`/products/${product.id}`}>
                <button className="enroll-button">Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="cardWraper">
        {filteredPosts.map((product) => () => (
          <div className="card">
            <img src={product.thumbnail} alt="Course Image" />
            <div className="card-content">
              <div className="course-title">{product.title}</div>
              <div className="course-description">{product.description}</div>
              <div className="course-price">$99</div>
              <button className="enroll-button">
                <Link to={`/products/${product.id}`}>Enroll</Link>
              </button>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default ProductList;
