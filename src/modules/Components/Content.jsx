import React, { useContext, useState } from "react";
import MenuBer from "./MenuBer";
import { Outlet } from "react-router-dom";

const Content = () => {

  return (
    <div className="flex ">
      <MenuBer />
      <Outlet />
    </div>
  );
};

export default Content;