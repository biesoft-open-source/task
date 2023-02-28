import { Navigate, Route, Routes } from "react-router-dom";
import { Page } from "./components";
import { routes } from "./constants";
import { Dashboard, Details } from "./modules";

export const App = () => {
  return (
    <Routes>
      <Route element={<Page />}>
        <Route path={routes.dashboard} element={<Dashboard />} />
        <Route path={routes.details()} element={<Details />} />
        <Route path="*" element={<Navigate to={routes.dashboard} />} />
      </Route>
    </Routes>
  );
};
