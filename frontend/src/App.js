import { Route, Routes } from "react-router-dom";
import { Reset } from "styled-reset";
import Header from "./components/Header";
import Nav from "./components/Nav";

import Cart from "./pages/CartPage/Cart";
import Login from "./pages/LoginPage/Login";
import Main from "./pages/MainPage/Main";
import Order from "./pages/OrderPage/Order";
import Signout from "./pages/Signoutpage/Signout";
import Admin from "./pages/Adminpage/Admin";
import Productadd from "./pages/Productaddpage/Productadd";
import Productedit from "./pages/Producteditpage/Productedit";
import Productlist from "./pages/Productlistpage/Productlist";
import Product from "./pages/ProductPage/Product";
import ProductDetail from "./pages/ProductPage/ProductDetail";
import Signup from "./pages/SignupPage/Signup";
import React from "react";
import MyAccount from "./pages/MyAccountPage/MyAccount";
import MyDetails from "./pages/MyAccountPage/MyDetailsPage/MyDetails";
import OrderHistory from "./pages/MyAccountPage/OrderHistoryPage/OrderHistory";

function App() {
  return (
    <>
      <Reset />
      <Nav />
      <Header />
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
        <Route path="/product" element={<Product />} />
        <Route path="/detail" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/myaccount/mydetails" element={<MyDetails />} />
        <Route path="/myaccount/orderhistory" element={<OrderHistory />} />
      </Routes>
    </>
  );
}

export default App;
