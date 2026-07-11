import "react";
import { Route, Routes } from "react-router-dom";




import NotFound from "../pages/NotFound";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Orders from "../pages/admin/Orders";
import Category from "../pages/admin/Category";
import Sellers from "../pages/admin/Sellers";
import PaymentRequest from "../pages/admin/PaymentRequest";
import DeActivedSeller from "../pages/admin/DeActivedSeller";
import SellerRequest from "../pages/admin/SellerRequest";
import SellerDetails from "../pages/admin/SellerDetails";
import ChatSeller from "../pages/admin/ChatSeller";
import OrderDetails from "../pages/admin/OrderDetails";
import SellerLayout from "../layouts/SellerLayout";
import SellerDashboard from "../pages/sellers/SellerDashboard";
import AddProduct from "../pages/sellers/AddProduct";
import AllProduct from "../pages/sellers/AllProduct";
import DiscountProduct from "../pages/sellers/DiscountProduct";
import SellerOrders from "../pages/sellers/SellerOrders";
import Payment from "../pages/sellers/Payment";
import ChatCustomer from "../pages/sellers/ChatCustomer";
import ChatSupport from "../pages/sellers/ChatSupport";
import SellerProfile from "../pages/sellers/SellerProfile";
import EditProduct from "../pages/sellers/EditProduct";
import SellerOrderDetails from "../pages/sellers/SellerOrderDetails";
import Home from "../pages/Main/Home";





export default function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout/>}>
          <Route element={<Home/>} path="/" />

      </Route>

      {/* admin routes */}
      <Route element={<AdminLayout/>}>
          <Route element={<AdminDashboard/>} path="/admin-dashboard" />
          <Route element={<Orders/>} path="/admin-dashboard/orders" />
          <Route element={<Category/>} path="/admin-dashboard/category" />
          <Route element={<Sellers/>} path="/admin-dashboard/sellers" />
          <Route element={<PaymentRequest/>} path="/admin-dashboard/payment-request" />
          <Route element={<DeActivedSeller/>} path="/admin-dashboard/deactive-sellers" />
          <Route element={<SellerRequest/>} path="/admin-dashboard/sellers-request" />
          <Route element={<SellerDetails/>} path="/admin-dashboard/seller-details/:sellerId" />
          <Route element={<ChatSeller/>} path="/admin-dashboard/chat-seller" />
          <Route element={<OrderDetails/>} path="/admin-dashboard/order-details/:orderId" />
      </Route>
      
      {/* Seller Routes */}
         <Route element={<SellerLayout/>}>
          <Route element={<SellerDashboard/>} path="/seller-dashboard" />
          <Route element={<AddProduct/>} path="/seller-dashboard/add-product" />
          <Route element={<AllProduct/>} path="/seller-dashboard/all-product" />
          <Route element={<DiscountProduct/>} path="/seller-dashboard/discount-product" />
          <Route element={<SellerOrders/>} path="/seller-dashboard/orders" />
          <Route element={<Payment/>} path="/seller-dashboard/payments" />
          <Route element={<ChatCustomer/>} path="/seller-dashboard/chat-customer/:customerId" />
          <Route element={<ChatCustomer/>} path="/seller-dashboard/chat-customer" />
          <Route element={<SellerProfile/>} path="/seller-dashboard/profile" />
          <Route element={<ChatSupport/>} path="/seller-dashboard/chat-support" />
          <Route element={<EditProduct/>} path="/seller-dashboard/edit-product/:productId" />
          <Route element={<SellerOrderDetails/>} path="/seller-dashboard/order-details/:orderId" />









            
         </Route>


      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
