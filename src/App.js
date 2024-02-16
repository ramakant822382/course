import React from "react";
import ProductList from "./components/courseCard";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetailsPage from "./components/courseDetails";
import Dashboard from "./components/dashboard";
import Nav from "./components/nav";
import Search from "./components/serch";

const App = () => {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:productId" element={<ProductDetailsPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
