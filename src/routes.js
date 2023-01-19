import React from "react";

import Home from "./pages/home/index";
import About from "./pages/about/index";
import Treatment from "./pages/treatment/index";
import Contact from "./pages/contact/index";
import Services from "./pages/services/index";

export const routes = [
  {
    title: "Home",
    path: "/",
    element: <Home />,
  },

  {
    title: "About",
    path: "/about",
    element: <About />,
  },
  {
    title: "Treatment",
    path: "/treatment",
    element: <Treatment />,
  },
  {
    title: "Contact",
    path: "/contact",
    element: <Contact />,
  },
  {
    title: "Services",
    path: "/services",
    element: <Services />,
  },
];
