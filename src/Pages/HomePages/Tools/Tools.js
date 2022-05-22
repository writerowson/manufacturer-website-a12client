import React from 'react';
import Tool from './Tool';
import useTools from './useTools';

const Tools = () => {
    const [Tools, setTools] = useTools()


    return (
        <div className='mx-12'>
            <h1 className='text-4xl text-center text-primary font-semibold mt-5 underline underline-offset-4 '> Tools and Accessories</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3  gap-4 drop-shadow-lg '>
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