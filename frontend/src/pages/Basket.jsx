import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { BasketContext } from "../context/BasketContext";
import { useGetDataQuery } from "../app/Slices/slices";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { NavLink } from "react-router";

function Basket() {
  let { isLoading } = useGetDataQuery();
  let { basket, setBasket } = useContext(BasketContext);

  function handleDelete(item) {
    let filter = basket.filter((wish) => wish._id != item._id);
    setBasket(filter);
  }
  function handlePlus(item) {
    item.count++;
    setBasket([...basket]);
  }
  function handleMinus(item) {
    if (item.count > 1) {
      item.count--;
      setBasket([...basket]);
    } else {
      let filter = basket.filter((wish) => wish._id != item._id);
      setBasket(filter);
    }
  }
  return (
    <>
      <Helmet>
        <title>Basket Page</title>
      </Helmet>
      <div className="Basket">
        <div className="table">
          <h1>Products Table</h1>
          <table>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Increase</th>
              <th>Total Price($)</th>
              <th>Decrease</th>
              <th>Count</th>
              <th>Delete</th>
            </tr>
            {isLoading ? (
              <h1>...Loading</h1>
            ) : basket.length == 0 ? (
              <div className="text">
                <h1>Data Yoxdur</h1>
                <button
                  style={{
                    border: "1px solid black",
                    borderRadius: "10px",
                    fontSize: "18px",
                    padding: "10px",
                  }}
                >
                  <NavLink style={{ color: "black" }} to={"/"}>
                    Go Back
                  </NavLink>
                </button>
              </div>
            ) : (
              basket.map((item) => (
                <tr key={item._id}>
                  <td>
                    <img
                      src={item.img}
                      alt=""
                      style={{
                        width: "150px",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>
                    <button onClick={() => handlePlus(item)}>
                      <FaPlus />
                    </button>
                  </td>
                  <td>{item.price * item.count}$</td>
                  <td>
                    <button onClick={() => handleMinus(item)}>
                      <FaMinus />
                    </button>
                  </td>
                  <td>{item.count}</td>
                  <td>
                    <button onClick={() => handleDelete(item)}>
                      <FaDeleteLeft />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </table>
        </div>
      </div>
    </>
  );
}

export default Basket;
