import React from 'react';
import Tool from './Tool';
import useTools from './useTools';

const Tools = () => {
    const [Tools, setTools] = useTools()


    return (
        <div>
            <Tool></Tool>
        </div>
    );
};

export default Tools;