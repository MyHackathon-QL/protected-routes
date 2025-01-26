import {Outlet, Navigate} from 'react-router-dom';

const ProtectedRoutes = () => {
    const user = null //null or 1 for authentication
    return user ? <Outlet/> : <Navigate to="/login"/>
}

export default ProtectedRoutes;