import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="pt-28 px-4">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
