import React, { useEffect } from 'react';
import { SiFacebook } from "react-icons/si"
import { FcGoogle } from "react-icons/fc"
import { AiFillGithub } from "react-icons/ai"
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import useToken from '../Shared/useToken';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    const [token] = useToken(user);

    const navigate = useNavigate()
    let signInError;
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        signInError = <p className='text-red-500'><small>{error?.message}</small></p>
    }
    return (
        <div>

            {signInError}
            <button onClick={() => signInWithGoogle()} className='mx-2 ' > <FcGoogle></FcGoogle> </button>
            <button className='mx-2 '><SiFacebook className='text-primary'></SiFacebook> </button>
            <button className='mx-2 '><AiFillGithub></AiFillGithub> </button>
        </div>
    );
};

export default SocialLogin;