import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Home = () => {

    const {user} = useContext(AuthContext)

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl pb-6 font-bold">Hello there</h1>
                    {
                        user && <p className="pb-6"><span className='text-xl font-medium text-blue-500'>{user?.email}</span> </p>
                    }
                    <p >
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    {/* <NavLink to={'/login'}><button className="btn btn-primary">Log In</button></NavLink> */}
                </div>
            </div>
        </div>
    );
};

export default Home;