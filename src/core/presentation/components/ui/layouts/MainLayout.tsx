import { Outlet } from "react-router-dom";

export const MainLayout = () => {
    return (
        <div className="w-screen h-screen bg-slate-800">
          <Outlet />
        </div>
    );
};