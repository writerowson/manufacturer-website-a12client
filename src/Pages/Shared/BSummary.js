import React from 'react';
import { DiHtml5DeviceAccess } from "react-icons/di"
import { MdPreview } from "react-icons/md"
import { FaPeopleCarry } from "react-icons/fa"
import { RiExchangeDollarFill } from "react-icons/ri"



const BSummary = () => {
    return (
        <div >
            <h1 className='text-4xl text-center font-semibold text-accent mt-20 mb-9 underline underline-offset-4 '>Business Summary</h1>
            <div className=" mx-12 stats shadow grid lg:grid-cols-4 sm:grid-cols-1 bg-accent ">
                <div className="stat bg-secondary">
                    <div className="stat-figure ">
                        <DiHtml5DeviceAccess className=' w-8 h-8'></DiHtml5DeviceAccess>
                    </div>
                    <div className="stat-title">Tools</div>
                    <div className="stat-value">120+ <span className='text-sm'>pieces</span> </div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaPeopleCarry className=' w-8 h-8  font-bold'></FaPeopleCarry>
                    </div>
                    <div className="stat-title text-white">Served</div>
                    <div className="stat-value text-secondary">25K+ <span className='text-sm'>customers</span> </div>
                    <div className="stat-desc text-white">11% more than last month</div>
                </div>


                <div className="stat bg-secondary">
                    <div className="stat-figure ">

                        <MdPreview className=' w-8 h-8'></MdPreview>
                    </div>
                    <div className="stat-title">Reviews</div>
                    <div className="stat-value ">2.6M+ <span className='text-sm'></span></div>
                    <div className="stat-desc">36% more than last month</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <RiExchangeDollarFill className=' w-8 h-8  font-bold'></RiExchangeDollarFill>
                    </div>
                    <div className="stat-title text-white">Annual revenue</div>
                    <div className="stat-value text-secondary">25.6K+ <span className='text-sm'>dollar</span></div>
                    <div className="stat-desc text-white">21% more than last Year</div>
                </div>


            </div>

        </div>
    );
};

export default BSummary;