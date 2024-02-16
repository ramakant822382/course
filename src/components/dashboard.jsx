import React from "react";

import { useSelector, useDispatch } from "react-redux";
const Dashboard = () => {
  const count = useSelector((state) => state.cart.items);
  console.log(count);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="dcontainer">
        <div className="dashboard">
          <h2>Welcome to Your Dashboard </h2>
          <h3>Enrolled Courses</h3>
          {count && count.map((item) => (
            <ul className="course-list">
              <li className="course-item">{item.title}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
