import React, { useState } from "react";

import { DeleteBox, EditBox } from "../../components";
import { TableRow } from "./components";

//Styles
import "./style.scss";

const Products = () => {
  const [visible, setVisible] = useState(false);
  const [boxType, setBoxType] = useState("");
  return (
    <div className="products-container">
      <h1>Products</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>IMG</th>
              <th>NAME</th>
              <th>QUANTITY</th>
              <th>COST</th>
              <th>SELLING PRICE</th>
              <th>CATEGORY</th>
              <th>MEASURE TYPE</th>
              <th>PRODUCT-ID</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((item, index) => (
              <TableRow
                index={index}
                onEdit={() => {
                  setBoxType("edit");
                  setVisible(true);
                }}
                onDelete={() => {
                  setBoxType("delete");
                  setVisible(true);
                }}
              />
            ))}
          </tbody>
        </table>
      </div>
      {boxType == "delete" ? (
        <DeleteBox visible={visible} setVisible={setVisible} />
      ) : boxType == "edit" ? (
        <EditBox visible={visible} setVisible={setVisible} />
      ) : null}
    </div>
  );
};

export default Products;
