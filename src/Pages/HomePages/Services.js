import React from 'react';
import assemble from '../../images/service/assemble.jpg';
import delivery from '../../images/service/delivery.jpg';
import shopping from '../../images/service/shopping.jpg';
import repair from '../../images/service/repair.jpg';


const Services = () => {
    return (
        <div>
            <h1 className='text-4xl text-center font-semibold text-accent mt-20 mb-9 underline underline-offset-4'>Our Services</h1>
            <div className="carousel w-full mt-10 ">
                <div id="item1" className="carousel-item w-full">
                    <div className="hero   bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={assemble} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                            <div className='text-center text-accent'>
                                <h1 className="text-3xl font-bold">Assembling PC</h1>
                                <p className="py-6">Here we assemble customers PC according to their requiement. </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div id="item2" className="carousel-item w-full">
                    <div className="hero   bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={shopping} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                            <div className='text-center text-accent'>
                                <h1 className="text-3xl  font-bold">Online Shopping</h1>
                                <p className="py-6">Without roaming here and there place an online order to us. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full">
                    <div className="hero   bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={delivery} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                            <div className='text-center text-accent'>
                                <h1 className="text-3xl font-bold">Home Delivery</h1>
                                <p className="py-6">We know the value of asset, with care and deliver on your hand. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full">
                    <div className="hero   bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={repair} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                            <div className='text-center text-accent'>
                                <h1 className="text-3xl font-bold">Repairing  </h1>
                                <p className="py-6">Here we assemble customers PC according their requiement </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2 mb-16">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Services;