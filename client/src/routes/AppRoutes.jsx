import { Routes, Route } from "react-router-dom";

// Auth Pages
import Login from "../pages/auth/LoginPage";
import SignupPage from "../pages/auth/SignUpPage";

// Protected Route
import ProtectedRoute from "../components/ProtectedRoute";
import GuestGuard from "../components/GuestGuard";

// Admin Pages
import ProductFormPage from "../pages/admin/ProductFormPage";
import HostHomeList from "../pages/admin/HostHomeList";
import ProductAdded from "../pages/shop/ProductAdded";

// Shop Pages
import HomePage from "../pages/shop/HomePage";
import OrderDonePage from "../pages/shop/OrderDonePage";
import ProductDetailPage from "../pages/shop/ProductDetailPage";
import CartPage from "../pages/shop/CartPage";
import CheckoutPage from "../pages/shop/CheckoutPage";
import Shop from "../pages/shop/Shop";
import About from "../pages/shop/About";
import ContactUs from "../pages/shop/ContactUs";

// Layout
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

// Error
import PageNotFound from "../pages/error/404";

const AppRoutes = () => {

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={ <GuestGuard> <HomePage /> </GuestGuard> }/>
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Buyer Protected Routes */}
        <Route path="/cart" element={<ProtectedRoute allowedRoles={["buyer"]}><CartPage /></ProtectedRoute>} />
        <Route path="/checkout"element={<CheckoutPage /> }/>
        <Route path="/orderdone" element={  <OrderDonePage />  } />

        {/* Seller Protected Routes */}
        <Route path="/admin/products/new" element={ <ProtectedRoute allowedRoles={["seller"]}> <ProductFormPage /> </ProtectedRoute> } />
        <Route path="/admin/products/edit/:id" element={ <ProtectedRoute allowedRoles={["seller"]}> <ProductFormPage />   </ProtectedRoute> } />
        <Route path="/admin/homes" element={  <HostHomeList /> } />
        <Route path="/admin/productadded" element={  <ProductAdded /> } />


        {/* Fallback */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
