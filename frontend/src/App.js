import React from "react";
import { Route, Routes } from "react-router-dom";
import { Reset } from "styled-reset";
import Header from "./components/Header";
import Nav from "./components/Nav";
<<<<<<< HEAD
import { ROUTE_ARR } from "./routes/route";
=======
import Cart from "./pages/CartPage/Cart";
import Login from "./pages/LoginPage/Login";
import Main from "./pages/MainPage/Main";
import Signout from "./pages/Signoutpage/Signout";
import Admin from "./pages/Adminpage/Admin";
import Productadd from "./pages/Productaddpage/Productadd";
import Productedit from "./pages/Producteditpage/Productedit";
import Order from "./pages/OrderPage/Order/Order";
import Product from "./pages/ProductPage/ProductList/ProductList";
import ProductDetail from "./pages/ProductPage/ProductDetail/ProductDetail";
import Signup from "./pages/SignupPage/Signup";
import CategoryManage from "./pages/Adminpage/CategoryManagePage/CategoryManage";
import MyAccount from "./pages/MyAccountPage/MyAccount";
import MyDetails from "./pages/MyAccountPage/MyDetailsPage/MyDetails";
import OrderHistory from "./pages/MyAccountPage/OrderHistoryPage/OrderHistory";
import Productlist from "./pages/Productlistpage/Productlist";
import Orderlist from "./pages/Orderlistpage/Orderlist";
>>>>>>> Parksunghwan/7team-feature/FE-admin-link

function App() {
  return (
    <>
      <Reset />
      <Nav />
      <Header />
      <Routes>
<<<<<<< HEAD
        {ROUTE_ARR.map((route, index) => {
          return (
            <Route path={route.path} element={<route.element />} key={index} />
          );
        })}
=======
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<Order />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/productadd" element={<Productadd />} />
        <Route path="/productedit" element={<Productedit />} />
        <Route path="/product" element={<Product />} />
        <Route path="/detail" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category" element={<CategoryManage />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/myaccount/mydetails" element={<MyDetails />} />
        <Route path="/myaccount/orderhistory" element={<OrderHistory />} />
        <Route path="/productlist" element={<Productlist />} />
        <Route path="/orderlist" element={<Orderlist />} />
>>>>>>> Parksunghwan/7team-feature/FE-admin-link
      </Routes>
    </>
  );
}

export default App;
