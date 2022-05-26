import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AiOutlineDoubleRight } from 'react-icons/ai'


const ToolsDetail = () => {
    const { toolId } = useParams()
    const [tool, setTools] = useState("")
    console.log(tool);

    useEffect(() => {
        const url = `http://localhost:5000/tools/${toolId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTools(data))
    }, [toolId])

    return (
        <div className='text-center '>
            <div class="  grid lg:grid-cols-2 sm:grid-cols-1 gap-40 my-8 mx-20">
                <div class=" flex-grow card rounded-box place-items-center">
                    <div class="card bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={tool.img} alt="" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">{tool.name}</h2>
                            <p className='text-start text-sm'>{tool.description}.</p>
                            <h2><b>Price:</b>{tool.price}</h2>

                            <p><b>Quantity: </b>{tool.quantity} pieces</p>
                            <p><b>Brand: </b> {tool.brand}</p>
                        </div>
                    </div></div>


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
            <Link className="btn btn-link text-accent flex justify-end mt-8" to={'/tools'}> See all PC World tools <AiOutlineDoubleRight className='ml-1'></AiOutlineDoubleRight> </Link>
        </div>
    );
};

export default ToolsDetail;