import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor: Attach bearer token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access") || localStorage.getItem("token");
    const isAuthRoute =
      config.url.includes("register") || config.url.includes("login");

    if (token && !isAuthRoute) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Clear invalid/expired token and safely redirect to login
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("access");
      localStorage.removeItem("token");
      localStorage.removeItem("refresh");
      localStorage.removeItem("user_role");

      // Only redirect if not already on login/register pages
      const currentPath = window.location.pathname;
      if (currentPath !== "/" && !currentPath.includes("/login") && !currentPath.includes("/register")) {
        window.location.href = "/";
      }
    }
    return Promise.reject(error);
  }
);

export default api;