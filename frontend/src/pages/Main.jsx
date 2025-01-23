import React from "react";
import { Helmet } from "react-helmet";
import Home from "../companents/Home";
import Products from "../companents/Products";
import About from "../companents/About";
import Beauty from "../companents/Beauty";
import Contact from "../companents/Contact";

function Main() {
  return (
    <>
      <Helmet>
        <title>Main Page</title>
      </Helmet>
      <div>
        <Home/>
        <About/>
        <Beauty/>
        <Products/>
        <Contact/>
      </div>
    </>
  );
}

export default Main;
