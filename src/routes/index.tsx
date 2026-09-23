// src/routes/index.tsx
import { createBrowserRouter, Navigate } from "react-router-dom";
import { ProtectedRoute, PublicRoute } from "./ProtectedRoute";
import { LandingPage } from "@/features/landing/pages/LandingPage";

// Halaman dummy sementara untuk auth & boards
const LoginPage = () => <div className="p-8">Halaman Login</div>;
const RegisterPage = () => <div className="p-8">Halaman Register</div>;
const BoardsPage = () => <div className="p-8">Halaman List Boards</div>;
const BoardDetailPage = () => (
  <div className="p-8">Halaman Kanban Board Detail</div>
);

export const router = createBrowserRouter([
  // Public Landing Page
  {
    path: "/",
    element: <LandingPage />,
  },
  // Guest Routes (Auth)
  {
    element: <PublicRoute />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },
  // Protected Routes
  {
    element: <ProtectedRoute />,
    children: [
      { path: "/boards", element: <BoardsPage /> },
      { path: "/boards/:boardId", element: <BoardDetailPage /> },
    ],
  },
  // Fallback
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
