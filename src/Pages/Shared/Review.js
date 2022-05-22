import React from 'react';

const Review = () => {
    return (
        <div>
            <h1 className='text-4xl text-center font-semibold text-primary mt-20 mb-9 underline underline-offset-4'>Customers Opinions</h1>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src="" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Review;