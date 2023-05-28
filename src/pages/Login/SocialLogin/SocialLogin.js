import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div className='card w-11/12 md:w-4/5 lg:w-2/5 mx-auto'>
            <div className="flex flex-col w-full border-opacity-50 px-4 md:px-10 lg:px-10">
                <div className="divider">Or</div>
                <button className='flex items-center btn btn-outline'>
                    <FcGoogle className='text-3xl'></FcGoogle>
                    <span className='ml-2'>Continue with Google</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;