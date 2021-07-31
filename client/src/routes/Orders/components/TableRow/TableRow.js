import React from "react";
import { FaFileDownload } from "react-icons/fa";

//Styles
import "./style.scss";

//Assets
import Avatar from "../../../../assets/images/avatar.png";

const TableRow = ({ index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td className="img avatar">
        <img src={Avatar} />
      </td>
      <td>Momen</td>
      <td className="products">products</td>
      <td>1500</td>
      <td>momen.ayman3302@gmail.com</td>
      <td>01111121162</td>
      <td className="status">
        <span>PENDING</span>
      </td>
      <td className="actions">
        <div>
          <div className="accept">
            <span>Accept</span>
          </div>
          <div className="reject">
            <span>Reject</span>
          </div>
          <div className="download">
            <FaFileDownload />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
