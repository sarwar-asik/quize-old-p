import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./components/Header/Header";

export const CousreContext = createContext([]);

const Root = () => {
    const courses = useLoaderData()
  return (
    <CousreContext.Provider value={courses} >
      <div>
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </CousreContext.Provider>
  );
};

export default Root;
