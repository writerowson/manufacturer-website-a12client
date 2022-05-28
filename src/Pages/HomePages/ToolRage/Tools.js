import React from 'react';
import Tool from './Tool';
import useTools from './useTools';

const Tools = () => {
    const [Tools] = useTools()


    return (
        <div className=' '>
            <h1 className='text-4xl text-center text-accent font-semibold mt-5 underline underline-offset-4 '> Tools and Accessories</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3  lg:mx-12 drop-shadow-lg '>
                {
                    Tools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>

        </div>
    );
};

export default Tools;