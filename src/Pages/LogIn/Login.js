
import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import SocialLogin from './SocialLogin';

const Login = () => {
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth)

    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        navigate('/')
    }
    let signInError;
    if (error) {
        signInError = <p ><small>{error?.message}</small></p>
    }


    return (
        <div class="hero min-h-screen  text-accent">
            <div class="text-center  bg-base-100 p-32 rounded">
                <h1 class="text-5xl font-bold mb-10">Login now!</h1>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-12'>
                    <div class=" w-full max-w-lg  bg-base-100 mt-50">
                        <div class="">
                            <p className='lg:mt-40 mb-2'>Login with</p>
                            <SocialLogin></SocialLogin>

                        </div>
                    </div>
                    <div class="divider lg:divider-horizontal lg:hidden">OR</div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100">
                        <div onSubmit='' class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text" name="email">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text" name="password">Password</span>
                                </label>
                                <input type="text" placeholder="password" class="input input-bordered" />
                                <label class="label">
                                    <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {signInError}
                            <div class="form-control mt-6">
                                <button class="btn btn-accent">Login</button>
                            </div>
                        </div>
                    </div>

                </div>
                <p className=' mt-16 '>New User? <Link onClick='' to='/register' className='font-bold' >Register Now!!</Link></p>
            </div>


        </div >
    );
};

export default Login;