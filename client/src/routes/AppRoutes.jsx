import { Routes, Route } from "react-router-dom";

// Auth Pages
import Login from "../pages/auth/LoginPage";
import SignupPage from "../pages/auth/SignUpPage";

// Protected Route
import ProtectedRoute from "../components/ProtectedRoute";
import GuestGuard from "../components/GuestGuard";
import RedirectIfAuthenticated from '../components/RedirectIfAuthenticated'

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
import ThnxContacting from "../pages/shop/ThnxContacting";

// Layout
import MainLayout from "../layouts/MainLayout"; // For Both Nav and Footer
import MinimalLayout from "../layouts/MinimalLayout"; // Only For Nav
import ScrollToTop from "../components/ScrollToTop";

// Error
import PageNotFound from "../pages/error/404";

const AppRoutes = () => {

  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Routes with Footer and Nav Layout */}
      <Route element={<MainLayout />}>
        {/* Public Routes */}
        <Route path="/" element={ <GuestGuard> <HomePage /> </GuestGuard> }/>
        <Route path="/shop" element={<GuestGuard> <Shop /> </GuestGuard>} />
        <Route path="/about" element={ <GuestGuard><About /> </GuestGuard>} />
        <Route path="/contact" element={<GuestGuard><ContactUs /></GuestGuard>} />
        <Route path="/product/:id" element={<ProtectedRoute><ProductDetailPage /></ProtectedRoute>} />

        {/* Auth Routes */}
        <Route path="/login" element={<RedirectIfAuthenticated> <Login /></RedirectIfAuthenticated>  } />
        <Route path="/signup" element={<RedirectIfAuthenticated><SignupPage /></RedirectIfAuthenticated> } />

        {/* Buyer Protected Routes */}
        <Route path="/cart" element={<ProtectedRoute allowedRoles={["buyer"]}><CartPage /></ProtectedRoute>} />

        {/* Seller Protected Routes */}
        <Route path="/admin/products/new" element={ <ProtectedRoute allowedRoles={["seller"]}> <ProductFormPage /> </ProtectedRoute> } />
        <Route path="/admin/products/edit/:id" element={ <ProtectedRoute allowedRoles={["seller"]}> <ProductFormPage />   </ProtectedRoute> } />
        <Route path="/admin/homes" element={ <ProtectedRoute allowedRoles={["seller"]}> <HostHomeList /></ProtectedRoute> } />


        {/* Fallback */}
        <Route path="*" element={<PageNotFound />} />
      </Route>

        {/* Routes without Footer */}
      <Route element={<MinimalLayout />}>
        <Route path="/checkout" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />
        <Route path="/orderdone" element={<ProtectedRoute><OrderDonePage /></ProtectedRoute>} />
        <Route path="/admin/productadded" element={<ProtectedRoute><ProductAdded /></ProtectedRoute>} />
        <Route path="/thnx" element={<ProtectedRoute><ThnxContacting /></ProtectedRoute>} />
      </Route>

      </Routes>
    </>
  );
};

export default AppRoutes;
