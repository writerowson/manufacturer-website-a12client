import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const ToolsDetail = () => {
    const { toolId } = useParams()
    const [tool, setTools] = useState("")
    console.log(tool);

    useEffect(() => {
        const url = `http://localhost:5000/tools/${toolId}`
        console.log(url);
        fetch(url)

            .then(res => res.json())
            .then(data => setTools(data))
    }, [toolId])

    return (
        <div className='text-center my-8'>
            <div class="flex w-full">
                <div class="grid  flex-grow card rounded-box place-items-center">
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={tool.img} alt="" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">{tool.name}</h2>
                            <p className='text-start'>{tool.description}.</p>
                            <h2><b>Price:</b>{tool.price}</h2>

                            <p><b>Quantity: </b>{tool.quantity} piece</p>
                            <p><b>Brand: </b> {tool.brand}</p>
                            <div class="card-actions">
                                <button class="btn btn-accent">Buy Now</button>
                            </div>
                        </div>
                    </div></div>

                <div class="grid flex-grow card rounded-box place-items-center">
                    <div class="card w-full bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-accent">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToolsDetail;