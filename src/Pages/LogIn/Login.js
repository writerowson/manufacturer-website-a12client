import React from 'react';
import SocialLogin from './SocialLogin';

const Login = () => {
    return (
        <div class="hero min-h-screen  text-accent">
            <div class="text-center  bg-base-100 p-32 rounded">
                <h1 class="text-5xl font-bold mb-10">Login now!</h1>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-12'>
                    <SocialLogin></SocialLogin>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" class="input input-bordered" />
                                <label class="label">
                                    <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-accent">Login</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div >
    );
};

export default Login;