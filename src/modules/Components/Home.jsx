import React, { useEffect, useState } from "react";

import { Outlet, redirect } from "react-router-dom";
import Navber from "./Navber";
import Content from "./Content";
import ValueContext from "../../context/valueContext";

const Home = () => {
  const [setting, setSetting] = useState();
  const [tablist, setTablist] = useState();

  useEffect(() => {
    console.log("=======================");
    redirect("/huyw");
  }, []);
  return (
    <ValueContext.Provider value={{ setting, setSetting, tablist, setTablist }}>
      <section className="h-screen lg:overflow-hidden ">
        <div>
          <Navber />
          <Outlet />
        </div>
      </section>
    </ValueContext.Provider>
  );
};

export default Home;
