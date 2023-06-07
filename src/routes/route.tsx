import { createBrowserRouter, Outlet, Navigate } from 'react-router-dom';
import Index from '@pages/Index/Index';

const Layout = () => {
    return (
        <>
            <Outlet />
        </>
    );
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Index />
            },
            {
                path: '/404',
                element: <Index />
            },
            {
                path: '/*',
                element: <Navigate to='/404' replace />
            }
        ]
    }
]);

export default router;
