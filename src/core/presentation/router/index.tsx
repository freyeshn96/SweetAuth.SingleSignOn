import { createBrowserRouter, RouteObject } from "react-router-dom";
import { MainLayout } from "../components/ui/layouts/MainLayout";
import DemoRouterPage from "../views/pages/demo/DemoRouterPage";

const routes: RouteObject[] = [
    {
        element: <MainLayout />,
        children: [
            {
                path: '/demo',
                element: <DemoRouterPage />
            }
        ]
    }
]

const router = createBrowserRouter(routes);
export default router;