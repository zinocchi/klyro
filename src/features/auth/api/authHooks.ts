import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@/api/axios";
import { LoginFormInputs, RegisterFormInputs } from "../schemas/auth.schema";
import { useAuthStore } from "@/stores/useAuthStore";
import { useNavigate } from "react-router-dom";
import { ApiResponse, User } from "@/types/api";

interface LoginResponse {
  user: User;
  token: string;
}

export const useLogin = () => {
  const setAuth = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data: LoginFormInputs) => {
      const res = await apiClient.post<ApiResponse<LoginResponse>>(
        "/auth/login",
        data,
      );
      return res.data;
    },
    onSuccess: (response) => {
      setAuth(response.data.user, response.data.token);
      navigate("/boards", { replace: true });
    },
  });
};

export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data: RegisterFormInputs) => {
      const res = await apiClient.post<ApiResponse<User>>(
        "/auth/register",
        data,
      );
      return res.data;
    },
    onSuccess: () => {
      navigate("/login", { replace: true });
    },
  });
};
