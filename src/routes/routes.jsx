import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/Dashboard";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/Not Found";
import ProtectedRoutes from "../pages/ProtectedRoutes";
import RegisterPage from "../pages/RegisterPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/dashboard" element={<ProtectedRoutes />}>
        <Route index element={<DashboardPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
