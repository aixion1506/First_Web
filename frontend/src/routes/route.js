import Cart from "../pages/CartPage/Cart";
import Login from "../pages/LoginPage/Login";
import Main from "../pages/MainPage/Main";
import DeleteAccount from "../pages/DeleteAccountPage/DeleteAccount";
import Productadd from "../pages/Productaddpage/Productadd";
import Productedit from "../pages/Producteditpage/Productedit";
import Order from "../pages/OrderPage/Order/Order";
import Product from "../pages/ProductPage/ProductList/ProductList";
import ProductDetail from "../pages/ProductPage/ProductDetail/ProductDetail";
import Signup from "../pages/SignupPage/Signup";
import CategoryManage from "../pages/AdminPage/CategoryManagePage/CategoryManage";
import MyAccount from "../pages/MyAccountPage/MyAccount";
import MyDetails from "../pages/MyAccountPage/MyDetailsPage/MyDetails";
import USERORDERHISTORY from "../pages/MyAccountPage/UserOrderHistoryPage/UserOrderHistory";
import Productlist from "../pages/Productlistpage/Productlist";
import Admin from "../pages/AdminPage/Admin";
import UserOrderedDetail from "../pages/MyAccountPage/UserOrderHistoryPage/UserOrderedDetailPage/UserOrderedDetail";

export const ROUTE = {
  HOME: {
    path: "/",
    link: "/",
    element: Main,
  },
  LOGIN: {
    path: "/login",
    link: "/login",
    element: Login,
  },
  REGISTER: {
    path: "/signup",
    link: "/signup",
    element: Signup,
  },
  DELETEACCOUNT: {
    path: "/deleteaccount",
    link: "/deleteaccount",
    element: DeleteAccount,
  },
  CART: {
    path: "/cart",
    link: "/cart",
    element: Cart,
  },
  PRODUCTADD: {
    path: "/productadd",
    link: "/productadd",
    element: Productadd,
  },
  PRODUCTEDIT: {
    path: "/productedit",
    link: "/productedit",
    element: Productedit,
  },
  ORDER: {
    path: "/order",
    link: "/order",
    element: Order,
  },
  PRODUCT: {
    path: "/product",
    link: "/product",
    element: Product,
  },
  PRODUCTDETAIL: {
    path: "/productDetail",
    link: "/productDetail",
    element: ProductDetail,
  },
  CATEGORYMANAGE: {
    path: "/categorymanage",
    link: "/categorymanage",
    element: CategoryManage,
  },
  MYACCOUNT: {
    path: "/myaccount",
    link: "/myaccount",
    element: MyAccount,
  },
  MYDETIALS: {
    path: "/myaccount/mydetails",
    link: "/myaccount/mydetails",
    element: MyDetails,
  },
  USERORDERHISTORY: {
    path: "/myaccount/orderhistory",
    link: "/myaccount/orderhistory",
    element: USERORDERHISTORY,
  },
  USERORDEREDDETAIL: {
    path: "/myaccount/orderhistory/detail/:id",
    link: "/myaccount/orderhistory/detail/",
    element: UserOrderedDetail,
  },
  PRODUCTLIST: {
    path: "/productlist",
    link: "/productlist",
    element: Productlist,
  },
  ADMIN: {
    path: "/admin",
    link: "/admin",
    element: Admin,
  },
};

export const ROUTE_ARR = Object.values(ROUTE);
