import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Reset } from "styled-reset";
import Header from "./components/Header";
import Nav from "./components/Nav";

import Cart from "./pages/CartPage/Cart";
import Login from "./pages/LoginPage/Login";
import Main from "./pages/MainPage/Main";
import Order from "./pages/OrderPage/Order/Order";
import Product from './pages/ProductPage/ProductList/ProductList';
import ProductDetail from './pages/ProductPage/ProductDetail/ProductDetail';
import Signup from "./pages/SignupPage/Signup";
import CategoryManage from './pages/AdminPage/CategoryManagePage/CategoryManage';
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
        <Route path="/product" element={<Product />}/>
        <Route path="/detail" element={<ProductDetail />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/category" element={<CategoryManage />}/>
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/myaccount/mydetails" element={<MyDetails />} />
        <Route path="/myaccount/orderhistory" element={<OrderHistory />} />
      </Routes>
    </>
  );
}

export default App;
