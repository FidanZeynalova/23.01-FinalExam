import React from "react";
import { Helmet } from "react-helmet";
import { useGetDataByIdQuery } from "../app/Slices/slices";
import { NavLink, useParams } from "react-router";
import { RiArrowGoBackFill } from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";
import { BsBasket3 } from "react-icons/bs";

function Detail() {
  let { id } = useParams();
  let { data, isLoading } = useGetDataByIdQuery(id);
 
  return (
    <>
      <Helmet>
        <title>Detail Page</title>
      </Helmet>
      <div className="Detail">
        <h1>Card Detail</h1>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="card">
            <div className="img">
              <img src={data.img} alt="" style={{width:"500px",height:"500px",objectFit:"cover"}}/>
            </div>
         <div className="content">
         <div className="text">
              <h3>{data.name}</h3>
              <span>${data.price}</span>
            </div>
            <div className="btns">
              <button>
                <AiOutlineLike />
              </button>
              <button>
                <NavLink to={"/"} style={{ color: "black" }}>
                  <RiArrowGoBackFill />
                </NavLink>
              </button>
              <button>
                <BsBasket3 />
              </button>
            </div>
         </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Detail;
