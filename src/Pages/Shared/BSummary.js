import React from 'react';
import { DiHtml5DeviceAccess } from "react-icons/di"
import { MdPreview } from "react-icons/md"
import { FaPeopleCarry } from "react-icons/fa"
import { RiExchangeDollarFill } from "react-icons/ri"



const BSummary = () => {
    return (
        <div >
            <h1 className='text-4xl text-center font-semibold text-primary mt-20 mb-9 underline underline-offset-4 '>Business Summary</h1>
            <div class=" mx-12 stats shadow grid lg:grid-cols-4 sm:grid-cols-1 bg-gray-900 ">
                <div class="stat bg-secondary">
                    <div class="stat-figure ">
                        <DiHtml5DeviceAccess className=' w-8 h-8'></DiHtml5DeviceAccess>
                    </div>
                    <div class="stat-title">Tools</div>
                    <div class="stat-value">120+ <span className='text-sm'>pieces</span> </div>
                    <div class="stat-desc">21% more than last month</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <FaPeopleCarry className=' w-8 h-8  font-bold'></FaPeopleCarry>
                    </div>
                    <div class="stat-title text-white">Served</div>
                    <div class="stat-value text-secondary">25K+ <span className='text-sm'>customers</span> </div>
                    <div class="stat-desc text-white">11% more than last month</div>
                </div>


                <div class="stat bg-secondary">
                    <div class="stat-figure ">

                        <MdPreview className=' w-8 h-8'></MdPreview>
                    </div>
                    <div class="stat-title">Reviews</div>
                    <div class="stat-value ">2.6M+ <span className='text-sm'></span></div>
                    <div class="stat-desc">36% more than last month</div>
                </div>
                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <RiExchangeDollarFill className=' w-8 h-8  font-bold'></RiExchangeDollarFill>
                    </div>
                    <div class="stat-title text-white">Annual revenue</div>
                    <div class="stat-value text-secondary">25.6K+ <span className='text-sm'>dollar</span></div>
                    <div class="stat-desc text-white">21% more than last Year</div>
                </div>


            </div>
        </div>
    );
};

export default BSummary;