import React from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./Component/Home/Home";
import Layout from "./Component/Layout/Layout";
import Search from "./Component/Search/Search";
import Services from "./Component/Servicess/Services";
import Notfound from "./Component/Notfound/Notfound";
import Register from "./Component/Register/Register";
import Login from "./Component/Login/Login";
import Contact from "./Component/Contact/Contact";
import DoctorRegister from "./Component/Register/DoctorRegister";
import LoginV2 from "./Component/Login/LoginV2";
import ChangePassword from "./Component/ChangePassword/ChangePassword";
import Profile from "./Component/Profile/Profile";
import AboutUs from "./Component/AboutUs/AboutUs";
import DoctorsInfo from "./Component/Search/DoctorsInfo";
import Appointments from "./Component/Appointments/Appointments";
export default function App() {
  const Routers = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        // {path:'/',element:<Home/>},
        { path: "/", element: <Navigate to={"/home"} /> },
        { path: "/search", element: <Search /> },
        { path: "/home", element: <Home /> },
        { path: "/aboutUs", element: <AboutUs /> },
        { path: "/services", element: <Services /> },
        { path: "/contact", element: <Contact /> },
        { path: "*", element: <Notfound /> },
        { path: "/register", element: <Register /> },
        { path: "/register/doctor", element: <DoctorRegister /> },
        { path: "/doctorsInfo", element: <DoctorsInfo /> },
        { path: "/login", element: <Login /> },
        { path: "/Appointments", element: <Appointments /> },

        { path: "/profile", element: <Profile /> },

        { path: "/loginv2", element: <LoginV2 /> },
        { path: "/changePassword", element: <ChangePassword /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={Routers}></RouterProvider>
    </>
  );
}
