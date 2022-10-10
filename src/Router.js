import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Course from "./components/Course/Course";
import Home from "./components/homes/Home";
import Quize from "./components/Quiez/Quize";
import ErrorBoundary from "./components/utilities/errorHandling";
import Root from "./Root";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    loader: () => fetch("fakeData.json"),
    errorElement: <ErrorBoundary />,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "course", element: <Course></Course> },
      {path:'quize',element:<Quize></Quize>},
      {path:'course/:id', 
      loader:async({params})=>{
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
      },
      element:<Quize></Quize>}
    ],
  },
  {
    path:'*',
    element:<ErrorBoundary></ErrorBoundary>
  }
]);

export default router;
