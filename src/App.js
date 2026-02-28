import React, { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

// Static components (load immediately)
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdminDashboard from "./superbase/AdminDashboard";
import AdminLogin from "./superbase/AdminLogin";

// Lazy-loaded pages
const Home = lazy(() => import("./components/Home"));
const AboutUs = lazy(() => import("./components/pages/AboutUs"));
const Contact = lazy(() => import("./components/pages/Contact"));
const Products = lazy(() => import("./components/pages/Products"));
const Services = lazy(() => import("./components/pages/Services"));
const NotFound = lazy(() => import("./components/pages/NotFound"));

// Spinner fallback component
function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
function PrivateRoute({ children }) {
  const isLogged = localStorage.getItem("admin") === "true";
  return isLogged ? (
    children
  ) : (
    <AdminLogin onLogin={() => window.location.reload()} />
  );
}

function App() {
  const location = useLocation();
  const hideLayout = location.pathname === "/admin-login";
  return (
    <div className="App">
      {/* Fixed Navbar */}
      {!hideLayout && <Navbar />}

      {/* Suspense for lazy-loaded routes */}
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Default route */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/home" element={<Home />} /> */}

          {/* Other pages */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />

          <Route
            path="/admin-login"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          />

          {/* Fallback for undefined routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      {!hideLayout && <Footer />}
    </div>
  );
}

export default App;
