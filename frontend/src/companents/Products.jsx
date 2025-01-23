import React, { useContext, useEffect, useState } from "react";
import { useGetDataQuery } from "../app/Slices/slices";
import { BsBasket3 } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { FaInfoCircle } from "react-icons/fa";
import { NavLink } from "react-router";
import Swal from "sweetalert2";
import { FavoritesContext } from "../context/FavoritesContext";
import { BasketContext } from "../context/BasketContext";

function Products() {
  let { data, isLoading, refetch } = useGetDataQuery();
  let { fav, setFav } = useContext(FavoritesContext);
  let { basket, setBasket } = useContext(BasketContext);
  let [allData, setAllData] = useState([]);
  

  useEffect(() => {
    if (data && !isLoading) {
      setAllData(data);
    }
  }, [data, isLoading]);

  function handleFav(item) {
    let find = fav.find((wish) => wish._id == item._id);
    if (find) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${item.name} daha öncədən əlavə olunub!`,
      });
    } else {
      setFav([...fav, item]);
    }
  }

  function handleBasket(item) {
    let find = basket.find((wish) => wish._id == item._id);
    if (find) {
    find.count ++
    setBasket([...basket])
    
    } else {
      setBasket([...basket, { ...item, count: 1 }]);
    }
  }

  function handleSearch(inpValue) {
    if (inpValue.trim() == "") {
      setAllData(data);
    } else {
      let filter = data.filter((wish) =>
        wish.name.toLowerCase().includes(inpValue.trim())
      );
      setAllData(filter);
    }
  }
  function handleSort(sortValue) {
    let sortedValue = [...allData];

    switch (sortValue) {
      case "default":
        sortedValue = [...allData];
        break;
      case "az":
        sortedValue.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "za":
        sortedValue.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "cheap":
        sortedValue.sort((a, b) => a.price - b.price);
        break;
      case "expensive":
        sortedValue.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setAllData(sortedValue);
  }
  return (
    <div className="Products">
      <div className="container">
        <h1>OUR PRODUCTS</h1>
        <div className="sort-search">
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <div className="sort">
            <select onChange={(e) => handleSort(e.target.value)}>
              <option value="default">Default</option>
              <option value="az">A-Z</option>
              <option value="za">Z-A</option>
              <option value="cheap">First Cheap</option>
              <option value="expensive"> First Expensive</option>
            </select>
          </div>
        </div>
        <div className="card-wrapper">
          {isLoading ? (
            <h1>...Loading</h1>
          ) : allData.length == 0 ? (
            <h1>Data Yoxudr</h1>
          ) : (
            allData.map((item) => (
              <div className="card" key={item._id}>
                <div className="img">
                  <img src={item.img} alt="" />
                </div>
                <div className="text">
                  <h3>{item.name}</h3>
                  <span>${item.price}</span>
                </div>
                <div className="btns">
                  <button onClick={() => handleFav(item)}>
                    <AiOutlineLike />
                  </button>
                  <button>
                    <NavLink to={item._id} style={{ color: "black" }}>
                      <FaInfoCircle />
                    </NavLink>
                  </button>
                  <button onClick={() => handleBasket(item)}>
                    <BsBasket3 />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
