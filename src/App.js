import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import React, { Suspense, lazy, useEffect, useState } from "react";

import Body from "./components/Body";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ReactDOM from "react-dom/client";
import RestaurantsInfo from "./components/RestaurantsInfo";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/context/UserContext";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    // Make API call and send username and password and get user name
    const data = {
      name: "Jyotsana Khaparde",
    };
    setUserName(data.name);
  });
  return (
    <div className="app">
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <Header />
        {/* Outlet :- Renders the child route's element, if there is one. It is kind of tunnel and all the child routes come in this place and the Outlet will be replaced by the component of that child route*/}
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </div>
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
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantsInfo />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
