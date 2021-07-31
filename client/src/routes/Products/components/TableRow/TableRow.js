import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";

//Styles
import "./style.scss";

//Assets
import productImg from "../../../../assets/images/product.png";

const TableRow = ({ index, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td className="img">
        <img src={productImg} />
      </td>
      <td>شباك</td>
      <td>100</td>
      <td>1500</td>
      <td>1600</td>
      <td>شبابيك</td>
      <td>number</td>
      <td>#2215</td>
      <td className="actions">
        <div>
          <div className="edit" onClick={onEdit}>
            <MdEdit />
          </div>
          <div className="delete" onClick={onDelete}>
            <MdDelete />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
