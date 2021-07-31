import React, { useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

import { IoLogOut } from "react-icons/io5";
import { BiPlus } from "react-icons/bi";

import { AddBox } from "../../components";
// import { useAuthContext, useAppContext } from "../../../Providers";

import { useOnClickOutside } from "../../hooks";

//Style
import "./style.scss";

//Assets
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const NavBar = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [visible, setVisible] = useState(false);

  //   const { setIsLoggedIn } = useAuthContext();
  //   const { createNotification } = useAppContext();

  const sidebarRef = useRef(null);

  useOnClickOutside(sidebarRef, () => setSidebarActive(false));

  return (
    <div className="navbar-container" ref={sidebarRef}>
      <div className="head">
        <div
          className="burger-menu"
          onClick={!sidebarActive ? () => setSidebarActive(true) : null}
          style={{ marginLeft: sidebarActive ? "260px" : "0" }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Logo />
      </div>
      <div
        className="sidebar"
        style={{ left: sidebarActive ? "0" : "-1000px" }}
        ref={sidebarRef}
      >
        <div>
          <div className="add-product-btn" onClick={() => setVisible(true)}>
            <button>
              Add Product
              <BiPlus />
            </button>
          </div>
          <div className="routes">
            <NavLink activeClassName="active" to="/products">
              {/* <FaUser /> */}
              Products
            </NavLink>
            <NavLink activeClassName="active" to="/orders">
              {/* <RiAdminFill /> */}
              Orders
            </NavLink>
          </div>
        </div>
        <div className="logout-button">
          <Link
            to="/"
            // onClick={() => {
            //   createNotification("تم تسجيل الخروج بنجاح", "info");
            //   setIsLoggedIn(false);
            // }}
          >
            Logout
            <IoLogOut />
          </Link>
        </div>
      </div>

      <div className="add-box">
        <AddBox visible={visible} setVisible={setVisible} />
      </div>
    </div>
  );
};

export default NavBar;
