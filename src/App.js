import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import About from "./components/About";
import Body from "./components/Body";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Header from "./components/Header";
import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantsInfo from "./components/RestaurantsInfo";

const AppLayout = () => {
  return (
    <>
      <Header />
      {/* Outlet :- Renders the child route's element, if there is one. It is kind of tunnel and all the child routes come in this place and the Outlet will be replaced by the component of that child route*/}
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantsInfo />,
      },
    ],
    errorElement: <Error/>,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
