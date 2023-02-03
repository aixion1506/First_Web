import { Route, Routes } from "react-router-dom";
import { Reset } from 'styled-reset';
import Header from './components/Header';
import Nav from './components/Nav';

import Cart from './pages/CartPage/Cart';
import Login from "./pages/LoginPage/Login";
import Main from "./pages/MainPage/Main";
import Order from "./pages/OrderPage/Order";
import Product from './pages/ProductPage/Product';
import ProductDetail from './pages/ProductPage/ProductDetail';
import Signup from "./pages/SignupPage/Signup";

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
      </Routes>
    </>
  );
}

export default App;
