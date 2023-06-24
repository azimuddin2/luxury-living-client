import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Image/logo.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './SignUp.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import useTitle from '../../../hooks/useTitle';

const SignUp = () => {
    useTitle('SignUp');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <section className='my-10'>
            <Link to='/' className='flex justify-center mb-6'>
                <img src={logo} alt="Logo" className='w-28 lg:w-32' />
            </Link>
            <div className="card w-11/12 md:w-4/5 lg:w-2/5 mx-auto border py-10">
                <h1 className="text-4xl text-primary font-semibold text-center">Sign Up</h1>
                <form onSubmit={handleSubmit} className="card-body px-4 md:px-10 lg:px-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-neutral text-lg">Name</span>
                        </label>
                        <input
                            name='name'
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-neutral text-lg">Email</span>
                        </label>
                        <input
                            name='email'
                            type="email"
                            placeholder="Your email"
                            className="input input-bordered focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-neutral text-lg">Password</span>
                        </label>
                        <input
                            name='password'
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="input input-bordered focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            required
                        />
                        <p className='m-12 show-password'
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {
                                showPassword ?
                                    <FaEyeSlash className='text-gray-500'></FaEyeSlash>
                                    :
                                    <FaEye className='text-gray-400'></FaEye>
                            }
                        </p>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary text-white">Sign Up</button>
                    </div>
                </form>
                <p className='text-center text-base text-accent'>Already have an account? <Link to='/login' className='text-primary font-semibold'>Login</Link></p>
            </div>
            <SocialLogin></SocialLogin>
        </section>
    );
};

export default SignUp;