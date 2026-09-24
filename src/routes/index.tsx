import { createBrowserRouter, Navigate } from "react-router-dom";
import { ProtectedRoute, PublicRoute } from "./ProtectedRoute";
import { LandingPage } from "@/features/landing/pages/LandingPage";

const LoginPage = () => <div className="p-8">Halaman Login</div>;
const RegisterPage = () => <div className="p-8">Halaman Register</div>;
const BoardsPage = () => <div className="p-8">Halaman List Boards</div>;
const BoardDetailPage = () => (
  <div className="p-8">Halaman Kanban Board Detail</div>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    element: <PublicRoute />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      { path: "/boards", element: <BoardsPage /> },
      { path: "/boards/:boardId", element: <BoardDetailPage /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
