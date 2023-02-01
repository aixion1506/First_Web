import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/MainPage/Main";
import Signup from "./pages/SignupPage/Signup";
import Login from "./pages/LoginPage/Login";
import Order from "./pages/OrderPage/Order";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
