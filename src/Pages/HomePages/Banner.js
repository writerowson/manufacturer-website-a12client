import React from 'react';
import banner from '../../images/banner.jpg'

const Banner = () => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={banner} alt='banner' /></figure>
            <div class="card-body">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;