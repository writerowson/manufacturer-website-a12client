import React from 'react';
import { Link } from 'react-router-dom';
import BSummary from '../Shared/BSummary';
import Review from '../Shared/Review';
import Banner from './Banner';
import Spelicalituies from './Spelicalituies';
import Tool from './ToolRage/Tool';
import useTools from './ToolRage/useTools';
import { AiOutlineDoubleRight } from 'react-icons/ai'
import Services from './Services';

const Home = () => {
    const [Tools, setTools] = useTools()

    return (
        <div className='bg-base-200'>
            <Banner></Banner>
            <div className=' mx-12'>
                <h1 className='text-4xl text-center text-accent font-semibold mt-20 mb-9 underline underline-offset-4'>Latest Tools and Accessories</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3  gap-4 drop-shadow-lg '>
                    {
                        Tools.slice(0, 3).map(tool => <Tool
                            key={tool._id}
                            tool={tool}
                        ></Tool>)
                    }
                </div>

                <Link className="btn btn-link text-accent flex justify-end" to={'/tool'}> See all PC World tool <AiOutlineDoubleRight className='ml-1'></AiOutlineDoubleRight> </Link>
            </div>
            <BSummary></BSummary>
            <Services></Services>
            <Spelicalituies></Spelicalituies>

        </div>
    );
};

export default Home;