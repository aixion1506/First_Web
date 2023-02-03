import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/MainPage/Main";
import Signup from "./pages/SignupPage/Signup";
import Login from "./pages/LoginPage/Login";
import Order from "./pages/OrderPage/Order";
import Signout from "./pages/Signoutpage/Signout";
import Admin from "./pages/Adminpage/Admin";
import Productadd from "./pages/Productaddpage/Productadd";
import Productedit from "./pages/Producteditpage/Productedit";
import Productlist from "./pages/Productlistpage/Productlist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<Order />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/productadd" element={<Productadd />} />
        <Route path="/productedit" element={<Productedit />} />
        <Route path="/productlist" element={<Productlist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
