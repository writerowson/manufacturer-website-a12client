import React from 'react';
import { SiFacebook } from "react-icons/si"
import { FcGoogle } from "react-icons/fc"
import { AiFillGithub } from "react-icons/ai"

const SocialLogin = () => {
    return (
        <div>
            <button className='mx-2 ' > <FcGoogle></FcGoogle> </button>
            <button className='mx-2 '><SiFacebook className='text-primary'></SiFacebook> </button>
            <button className='mx-2 '><AiFillGithub></AiFillGithub> </button>
        </div>
    );
};

export default SocialLogin;