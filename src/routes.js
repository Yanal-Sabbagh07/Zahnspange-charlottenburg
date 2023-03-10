import React from "react";

import Home from "./pages/home/index";
import About from "./pages/about/index";
import Treatment from "./pages/treatment/index";
import Contact from "./pages/contact/index";
import Services from "./pages/services/index";
import Adults from "./pages/treatment/Adults";
import Kids from "./pages/treatment/Kids";
import Message from "./pages/message/Message";

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
    title: "Adults",
    path: "/treatment/adults",
    element: <Adults />,
  },
  {
    title: "Kids",
    path: "/treatment/kids",
    element: <Kids />,
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
  {
    title: "Request",
    path: "/message",
    element: <Message />,
  },
];
