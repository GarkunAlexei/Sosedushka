import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';

const ProtectedAuth = ({ children }) => {
    const user = useSelector( state => state.user);
    let location = useLocation();
    // console.log('==>>>protect')
    // console.log(user);
    if(!user){
       return <Navigate to="/singin" state={{ from: location }} replace />;
    } else {
      return children;
    }
}

export default ProtectedAuth;
