import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';

const ProtectedAuth = ({ children }) => {
    const user = useSelector( state => state.user);
    let location = useLocation();
console.log('==>>>protect')
    if(!user){
       return <Navigate to="/singup" state={{ from: location }} replace />;
    }
    return children;
}

export default ProtectedAuth;
