import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    
    const handleSignInWithGoogle = () => {
        signInWithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.error(error.message);
            })
    };

    return (
        <div className='card w-11/12 md:w-4/5 lg:w-2/5 mx-auto'>
            <div className="flex flex-col w-full border-opacity-50 px-4 md:px-10 lg:px-10">
                <div className="divider">Or</div>
                <button
                    onClick={handleSignInWithGoogle}
                    className='flex items-center btn btn-outline'
                >
                    <FcGoogle className='text-3xl'></FcGoogle>
                    <span className='ml-2'>Continue with Google</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;