import React from 'react';
import BSummary from '../Shared/BSummary';
import Review from '../Shared/Review';
import Banner from './Banner';
import Tool from './Tools/Tool';
import useTools from './Tools/useTools';

const Home = () => {
    const [Tools, setTools] = useTools()

    return (
        <div>
            <Banner></Banner>
            <div className=' mx-12'>
                <h1 className='text-4xl text-center text-primary font-semibold mt-20 mb-9 underline underline-offset-4'>Latest Tools and Accessories</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3  gap-4 drop-shadow-lg '>
                    {
                        Tools.slice(0, 3).map(tool => <Tool
                            key={tool._id}
                            tool={tool}
                        ></Tool>)
                    }
                </div>

            </div>
            <BSummary></BSummary>
            <Review></Review>
        </div>
    );
};

export default Home;