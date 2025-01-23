import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { useGetDataQuery } from "../app/Slices/slices";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { BsBasket3 } from "react-icons/bs";
import { FavoritesContext } from "../context/FavoritesContext";
import { NavLink } from "react-router";

function Wishlist() {
  let {  isLoading } = useGetDataQuery();
  let { fav, setFav } = useContext(FavoritesContext);

  function handleDelete(item) {
    let filter = fav.filter((wish) => wish._id != item._id);
    setFav(filter);
  }


  return (
    <>
      <Helmet>
        <title>Wishlist Page</title>
      </Helmet>
      <div className="Wishlist">
        <div className="container">
          <h1>Wishlist PRODUCTS</h1>
          <div className="card-wrapper">
            {isLoading ? (
              <h1>...Loading</h1>
            ) : fav.length == 0 ? (
              <div className="text">
                <h1>Data Yoxdur</h1>
                <button
                  style={{
                    border: "1px solid black",
                    borderRadius: "10px",
                    fontSize: "18px",
                    padding:"10px"
                  }}
                >
                  <NavLink style={{ color: "black" }} to={"/"} >Go Back</NavLink>
                </button>
              </div>
            ) : (
              fav.map((item) => (
                <div className="card" key={item._id}>
                  <div className="img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="text">
                    <h3>{item.name}</h3>
                    <span>${item.price}</span>
                  </div>
                  <div className="btns">
                    <button onClick={() => handleDelete(item)}>
                      <AiOutlineDislike />
                    </button>
                    <button>
                      <BsBasket3 />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Wishlist;
