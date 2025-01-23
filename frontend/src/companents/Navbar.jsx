import React, { useContext } from "react";
import { NavLink } from "react-router";
import { FaBars } from "react-icons/fa";
import { FavoritesContext } from "../context/FavoritesContext";
import { BasketContext } from "../context/BasketContext";
function Navbar() {
  let { fav } = useContext(FavoritesContext);
  let { basket } = useContext(BasketContext);
  return (
    <div className="Navbar">
      <div className="container">
        <div className="logo">
          <img
            src="https://mobirise.com/extensions/naturalm4/natural-cosmetic/assets/images/logo1-1-96x96.png"
            alt=""
          />
          <span>NATURAL COSMETIC</span>
        </div>
        <div className="list">
          <ul>
            <li>
              <NavLink
                to={"/"}
                style={({ isActive }) => {
                  return isActive ? { color: "plum" } : {color:"black"};
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/add"}
                style={({ isActive }) => {
                  return isActive ? { color: "plum" } : {color:"black"};
                }}
              >
                Add
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/wishlist"}
                style={({ isActive }) => {
                  return isActive ? { color: "plum" } :{color:"black"};
                }}
              >
                Wishlist({fav.length})
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/basket"}
                style={({ isActive }) => {
                  return isActive ? { color: "plum" } : {color:"black"};
                }}
              >
                Basket({basket.length})
              </NavLink>
            </li>
          </ul>
          <div className="icon">
            <FaBars />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
