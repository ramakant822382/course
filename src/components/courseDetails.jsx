import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../App.css";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItem(product));
  };
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/posts/${productId}`
        );
        setProduct(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="course-details">
        <h2>{product.title}</h2>
        <img src={product.thumbnail} alt="Course Image" className="dcardimg" />
        <p>
          <strong>Instructor:</strong> {product.instructor}
        </p>
        <p>
          <strong>Duration:</strong> {product.duration}
        </p>
        <p>
          <strong>Description:</strong> {product.description}
        </p>
        <p>
          <strong>Prerequisites:</strong> {product.prerequisites}
        </p>
        <p>
          <strong>Location:</strong> {product.location}
        </p>
        <p>
          <strong>Schedule:</strong> {product.schedule}
        </p>
        <p>
          <strong>Enrollment Status:</strong> {product.enrollmentStatus}
        </p>

        <Link to={"/dashboard"}>
          <button className="enroll-button" onClick={handleAddToCart}>
            Enroll
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
