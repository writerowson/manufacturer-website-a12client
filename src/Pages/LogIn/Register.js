import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import SocialLogin from './SocialLogin';

const Register = () => {
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log(data.email, data.password);

    }
    let signInError;
    if (loading || updating) {
        return <Loading></Loading>
    }
    if (user) {
        navigate('/')
    }

    if (error || updateError) {
        signInError = <p className='text-red-500'><small>{error?.message || updateError?.message}</small></p>
    }

    return (
        <div class="hero min-h-screen  text-accent">
            <div class="text-center  bg-base-100 p-32 rounded">
                <h1 class="text-5xl font-bold mb-10">Register now!</h1>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-12'>
                    <div class=" w-full max-w-lg  bg-base-100 mt-50">
                        <div class="">
                            <p className='lg:mt-40 mb-2'>Register with</p>
                            <SocialLogin></SocialLogin>

                        </div>
                    </div>
                    <div class="divider lg:divider-horizontal lg:hidden">OR</div>
                    <div class="card  flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} class="card-body ">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text" name="Name">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text" name="email">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500 ">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text" name="password">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                                />
                                <label class="label">
                                    <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>
                            {signInError}
                            <div class="form-control mt-6">
                                <button class="btn btn-accent">Register</button>
                            </div>
                        </form>
                    </div>

                </div>
                <p className=' mt-16 '>Already Register? <Link onClick='' to='/register' className='font-bold' >Login Now!!</Link></p>
            </div>


        </div >
    );
};

export default Register;