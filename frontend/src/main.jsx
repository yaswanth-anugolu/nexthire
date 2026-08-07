import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "./index.css";

import App from "./App";
import theme from "./theme";
import { AuthProvider } from "./context/AuthContext";

console.log("12345678");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);