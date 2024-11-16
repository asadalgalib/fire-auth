import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const navigate = useNavigate();
    const { logInUser,signInWithhGoogle } = useContext(AuthContext)

    const handleLogIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        logInUser(email, password).then((result) => {
            e.target.reset();
        }).catch((err) => {
            console.log(err);
        });
        navigate('/');
    }

    const handleGoogle = () => {
        signInWithhGoogle()
        .then(()=>{
            navigate('/');
        })
        .catch(err => {
            console.log(err);
        })
    }
    return (
        <div className="hero bg-base-200 px-5 py-20">
            <div className="card  flex-col lg:flex-row-reverse">
                <div className="card-body rounded-lg bg-base-100 w-full shrink-0 shadow-2xl">
                    <form onSubmit={handleLogIn} className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Log In</button>
                        </div>
                    </form>
                    <div className='mt-6 '>
                        <p>New to this website? Please <NavLink to={'/signup'}><span className='btn-ghost py-1 px-4 rounded font-medium'>Sign Up</span></NavLink></p>
                    </div>
                    <div className="form-control mt-2">
                        <button onClick={handleGoogle} className="btn btn-outline">Cotinue With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;