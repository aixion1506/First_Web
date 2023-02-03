import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/MainPage/Main";
import Signup from "./pages/SignupPage/Signup";
import Login from "./pages/LoginPage/Login";
import Order from "./pages/OrderPage/Order";
import Signout from "./pages/Signoutpage/Signout";
import Admin from "./pages/Adminpage/Admin";
import Productadd from "./pages/Productaddpage/Productadd";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
