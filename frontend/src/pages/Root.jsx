import React from "react";
import Navbar from "../companents/Navbar";
import Footer from "../companents/Footer";
import { Outlet } from "react-router";

function Root() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
