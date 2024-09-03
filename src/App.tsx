import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/theme-provider";

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="mercadolivre-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | Empresa" />
        <Toaster richColors />
        <RouterProvider router={router} />;
      </ThemeProvider>
    </HelmetProvider>
  );
}
