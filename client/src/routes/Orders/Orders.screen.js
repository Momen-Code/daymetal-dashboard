import React from "react";

import { TableRow } from "./components";

//Styles
import "./style.scss";

const Orders = () => {
  return (
    <div className="orders-container">
      <h1>Orders</h1>
      <div className="selection">
        <div className="select-item">
          <select
          // onChange={async (e) => {
          //   setSearchObject({ ...searchObject, employeeId: e.target.value });
          // }}
          >
            <option value="" selected disabled unselectable>
              STATUS
            </option>
            <option>pending</option>
            <option>under manufacturing</option>
            <option>waiting for delivery</option>
            <option>delivered</option>
          </select>
          <span></span>
        </div>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>IMG</th>
              <th>NAME</th>
              <th>PRODUCTS</th>
              <th>SELLING PRICE</th>
              <th>EMAIL</th>
              <th>MOBILE</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((item, index) => (
              <TableRow index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
