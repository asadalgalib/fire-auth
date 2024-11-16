import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Signup = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;

        createUser(email, password).then((result) => {
            e.target.reset();
        }).catch((err) => {
            console.log(err);
        });
        navigate('/');
    }

    return (
        <div className="hero bg-base-200 px-5 py-20">
            <div className="card  flex-col lg:flex-row-reverse">
                <div className="card-body rounded-lg bg-base-100 w-full shrink-0 shadow-2xl">
                    <form onSubmit={handleSignIn} className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <div className='my-4 '>
                        <p>Already have an acoount? Please <NavLink to={'/login'}><span className='btn-ghost py-1 px-4 rounded font-medium'>Log In</span></NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;