import React from 'react';
import banner from '../../images/banner.jpg'

const Banner = () => {
    return (
        <div className="bg-no-repeat bg-center hero bg-cy"
            style={{ backgroundImage: `url(${banner})` }} >

            {/* <div className=" bg-black bg-opacity-50 px-80  py-28 "> */}
            <div className=" hero-content flex-col bg-black bg-opacity-50  sm: lg:pb-48 lg:pt-20 lg:px-80 text-center  ">
                <h3 className='text-8xl font-semibold text-white mt-20 Plus  '>PC   <span className='text-secondary ml-10 '>   World</span></h3>
                <p className='text-sm text-white uppercase '>Accessories <span className='mx-16'>Instruments</span> Appliances </p>
                <div className=' mt-8 pt-10  '>
                    <button className="btn btn-sm btn-outline btn-secondary animate-bounce w-40 h-6">Explore More</button>
                    <button className="btn btn-sm btn-outline btn-secondary animate-bounce w-40 h-6"> Shop Now </button>
                </div>
            </div>
        </div >

    );
};

export default Banner