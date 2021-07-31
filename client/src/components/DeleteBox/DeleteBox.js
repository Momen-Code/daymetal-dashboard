import React, { useState, useRef } from "react";
import { useOnClickOutside } from "../../hooks";

//Styles
import "./style.scss";

const DeleteBox = ({ visible, setVisible, activeEmployee, onDelete }) => {
  const deleteBoxRef = useRef(null);
  useOnClickOutside(deleteBoxRef, () => setVisible(false));

  return (
    visible && (
      <div className="delete-box-container">
        <div className="container" ref={deleteBoxRef}>
          <div className="closing" onClick={() => setVisible(false)}>
            <span></span>
            <span></span>
          </div>
          <h3>Delete Product</h3>
          <h1>شباك #123</h1>
          <div className="submit-button">
            <div className="confirm">
              <button
                type="button"
                // onClick={(e) => {
                //   e.preventDefault();
                //   console.log(activeEmployee._id);
                //   deleteEmployee({ _id: activeEmployee._id });
                //   setVisible(false);
                //   onDelete();
                // }}
              >
                delete
              </button>
            </div>
            <div className="cancel">
              <button type="button" onClick={() => setVisible(false)}>
                cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default DeleteBox;
