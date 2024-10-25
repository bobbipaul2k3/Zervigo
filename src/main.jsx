import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import ZomatoLikeSite from './sample.jsx';
import  { ExpandableCardDemo } from "./components/exp/use-outside-click.jsx";
import React from "react";

import SignupFormDemo from "./components/Sup.jsx";
import SecureProfileWindow from "./Myprofile.jsx";
import LoginDemo from "./components/Sin.jsx";
import ProfileDisplay from "./Rank.jsx";
import ProfilePage from "./components/Upro.jsx";
import { AnimatedModalDemo } from "./components/Book.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <ZomatoLikeSite />,
  },
  {
    path: "/profile",
    element: <ProfileDisplay />,
  },
  {
    path: "/login",
    element: <LoginDemo/>,
  },
  {
    path: "/signup",
    element: <SignupFormDemo />,
  },
  {
    path: "/account",
    element: <SecureProfileWindow />,
  },
  {
    path: "/view_profile",
    element: <ProfilePage />,
  },
  {
    path: "/Book",
    element: <AnimatedModalDemo />,
  },
 
 
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



