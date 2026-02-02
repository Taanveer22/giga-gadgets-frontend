import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import { Toaster } from "react-hot-toast";
import AuthContextProvider from "./providers/AuthContextProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Wrap EVERYTHING that needs auth inside the AuthProvider */}
    <AuthContextProvider>
      <RouterProvider router={PublicRoutes} />
      <Toaster />
    </AuthContextProvider>
  </StrictMode>,
);
