import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AppProvider, RootLoader } from "./components";
import { router } from "./config";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AppProvider>
    <RouterProvider router={router} fallbackElement={<RootLoader />} />
  </AppProvider>
);
