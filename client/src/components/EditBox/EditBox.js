import React, { useRef } from "react";
import { useOnClickOutside } from "../../hooks";

//Styles
import "./style.scss";

const EditBox = ({ visible, setVisible }) => {
  const productRefBox = useRef(null);
  useOnClickOutside(productRefBox, () => setVisible(false));

  return (
    visible && (
      <div className="edit-box-container">
        <div className="container" ref={productRefBox}>
          <div className="closing" onClick={() => setVisible(false)}>
            <span></span>
            <span></span>
          </div>
          <h4>editing product #12</h4>
          <form>
            <div className="name">
              <input
                type="text"
                placeholder="Product name"
                value=""
                // onChange={(e) =>
                //   setActiveEmployee({ ...activeEmployee, name: e.target.value })
                // }
              />
            </div>
            <div className="quantity">
              <input
                type="text"
                placeholder="Product quantity"
                value=""
                // onChange={(e) =>
                //   setActiveEmployee({ ...activeEmployee, name: e.target.value })
                // }
              />
            </div>
            <div className="cost">
              <input
                type="text"
                placeholder="Product cost"
                value=""
                // onChange={(e) =>
                //   setActiveEmployee({ ...activeEmployee, name: e.target.value })
                // }
              />
            </div>
            <div className="selling-price">
              <input
                type="text"
                placeholder="Product selling price"
                value=""
                // onChange={(e) =>
                //   setActiveEmployee({ ...activeEmployee, name: e.target.value })
                // }
              />
            </div>
            <div className="category">
              <input
                type="text"
                placeholder="Product category"
                value=""
                // onChange={(e) =>
                //   setActiveEmployee({ ...activeEmployee, name: e.target.value })
                // }
              />
            </div>
            <div className="measure-type">
              <input
                type="text"
                placeholder="Product measure type"
                value=""
                // onChange={(e) =>
                //   setActiveEmployee({ ...activeEmployee, name: e.target.value })
                // }
              />
            </div>
            <div className="cost">
              <input
                type="text"
                placeholder="Product cost"
                value=""
                // onChange={(e) =>
                //   setActiveEmployee({ ...activeEmployee, name: e.target.value })
                // }
              />
            </div>
            <div className="img">
              <label for="file-upload" className="upload">
                Upload img
              </label>
              <input
                type="file"
                accept=".png, .jpg, .jpeg"
                id="file-upload"
                // onChange={handlePhoto}
              />
            </div>
            <div class="submit-button edit">
              <button type="submit" className="edit">Edit</button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default EditBox;
