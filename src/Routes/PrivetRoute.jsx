import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({ children }) => {

    const { user,loading } = useContext(AuthContext);
    if(loading){
        return <div className='flex justify-center'> <span className="loading loading-spinner text-info"></span></div>
    }
    if(user){
        return children
    }
    return (
        <div>
            <Navigate to={'/login'}></Navigate>
        </div>
    );
};

export default PrivetRoute;