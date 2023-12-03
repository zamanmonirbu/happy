import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';


const ProtectedRoute = () => {
    const user = localStorage.getItem("token");
    const location = useLocation();
    return (
        <div>
            {
                user ? <Outlet /> : <Navigate to="/login" replace state={{ prevUrl: location.pathname }} />
            }
        </div>
    );
};

export default ProtectedRoute;