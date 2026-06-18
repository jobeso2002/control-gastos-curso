import { Routes, Route } from "react-router-dom";
import { Login, Home, ProtectedRoute, UserAuth } from "../index";

export function MyRoutes() {
  const { user } = UserAuth();
  return (
    <Routes future={{ v7_relativeSplatPath: true }}>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute user={user} redirectTo="/login" />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Home />} />
      </Route>
    </Routes>
  );
}