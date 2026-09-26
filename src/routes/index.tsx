import { createBrowserRouter, Navigate } from "react-router-dom";
import { ProtectedRoute, PublicRoute } from "./ProtectedRoute";
import { LandingPage } from "@/features/landing/pages/LandingPage";
import { LoginPage } from "@/features/auth/pages/LoginPage";
import { RegisterPage } from "@/features/auth/pages/RegisterPage";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/stores/useAuthStore";

const BoardsPage = () => {
  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Hapus token & data user dari Zustand + LocalStorage
    navigate("/login", { replace: true }); // Lempar balik ke login
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Halo, {user?.name}!</h1>
      <p className="mb-4">Ini halaman List Boards (Protected).</p>

      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-rose-500 text-white rounded-md font-medium hover:bg-rose-600 transition-colors">
        Logout
      </button>
    </div>
  );
};
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
