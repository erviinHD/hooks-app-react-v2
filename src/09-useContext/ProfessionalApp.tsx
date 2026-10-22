import { RouterProvider } from "react-router";
import { AppRouter } from "./router/App.Router";
import { UserContextProvider } from "./context/UserContext";

export const ProfessionalApp = () => {
  return (
    <UserContextProvider>
      <div className="bg-gradient ">
        <RouterProvider router={AppRouter} />
      </div>
    </UserContextProvider>
  );
};
