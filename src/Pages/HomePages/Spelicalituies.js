import React from 'react';
import { RiContactsFill } from "react-icons/ri"
import { Link } from 'react-router-dom';
import { MdGroups } from "react-icons/md"
import { MdForum } from "react-icons/md"

const Spelicalituies = () => {
    return (

        <div className="hero " >
            <div className="hero-overlay bg-accent my-40"></div>
            <div className="hero-content text-center  grid lg:grid-cols-3 sm:grid-cols-1">
                <div className="card w-96  text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title"> <RiContactsFill className='w-16 h-16 border-2 rounded-full p-1'></RiContactsFill>
                        </h2>
                        <Link to={'/contact'}>Contact Us</Link>
                        <p>Have any opinions or questions, we are here to listen from you</p>

                    </div>
                </div>

                <div className="card w-96  text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title"> <MdForum className='w-16 h-16 border-2 rounded-full p-1'></MdForum>
                        </h2>
                        <Link to={'/contact'}>Join Forum</Link>
                        <p>Join our community to know more details from our experts.</p>

                    </div>
                </div>
                <div className="card w-96  text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title"> <MdGroups className='w-16 h-16 border-2 rounded-full p-1'></MdGroups>
                        </h2>
                        <Link to={'/about'}>About us</Link>
                        <p>Here is  a dedicated team at your service</p>

                    </div>
                </div>

            </div>
        </div>




    );
};

export default Spelicalituies;