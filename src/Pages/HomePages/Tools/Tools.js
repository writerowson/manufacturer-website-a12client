import React from 'react';
import Tool from './Tool';
import useTools from './useTools';

const Tools = () => {
    const [Tools, setTools] = useTools()


    return (
        <div >
            <h1 className='text-4xl text-center text-primary mt-5 underline underline-offset-4'> Tools and Accessories</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3  gap-4 drop-shadow-lg mx-8'>
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