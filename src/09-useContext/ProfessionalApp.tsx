import { RouterProvider } from "react-router";
import { AppRouter } from "./router/App.Router";

export const ProfessionalApp = () => {
  return (
    <div className="bg-gradient ">
      <RouterProvider router={AppRouter} />
    </div>
  );
};
