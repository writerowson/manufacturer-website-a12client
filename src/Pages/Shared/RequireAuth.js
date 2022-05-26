import React, { Children } from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom'
import auth from '../../firebase.init';
import Loading from './Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const location = useLocation()
    if (loading)
        return <Loading></Loading>
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    if (error) {
        <p className='text-danger'>Error: {error.message}</p>
    }
    // if (!user.emailVerified) {
    //     return <div className='text-center '>
    //         <h3 style={{ marginTop: '10rem' }} className='text-accent '>Your Email is not verified</h3>
    //         <h5 className='text-red-500 font-bold'>Please Verify your email address</h5>
    //         <button style={{ marginBottom: '10rem' }} className='btn btn-accent'
    //             onClick={async () => {
    //                 await sendEmailVerification();
    //                 return alert('Email sent');
    //             }}
    //         >
    //             Send Verification Email again
    //         </button >

    //     </div>
    // }
    return children
};

export default RequireAuth;
