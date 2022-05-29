import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AiOutlineDoubleRight } from 'react-icons/ai'
import UserDetails from '../../UserPage/UserDetails';



const ToolsDetail = () => {
    const { toolId } = useParams()
    const [tool, setTools] = useState({})
    const { img, name, description, price, brand, tools, quantity } = tool

    useEffect(() => {
        const url = `https://secure-brook-18668.herokuapp.com/tools/${toolId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTools(data))
    }, [toolId])

    return (
        <div className='text-center  text-sm   '>
            {/* <div className="  grid lg:grid-cols-2 sm:grid-cols-1 gap-40 my-8 mx-20"> */}
            <div className=" grid  grid-cols-1  gap-8 my-8 lg:mx-20 drop-shadow-lg ">
                <div className=" flex-grow card rounded-box place-items-center  ">
                    <div className="card bg-base-100 shadow-xl w-full">
                        <figure className="px-10 pt-10">
                            <img src={img} alt="" className="rounded-xl w-120" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{name}</h2>
                            <p className='text-start w-96 '>{description}.</p>
                            <h2><b>Price: </b>${price}</h2>
                            <p><b>Available Quantity: </b>{tools} pieces</p>
                            <p><b>Minimum Quantity: </b>{quantity} pieces</p>
                            <p><b>Brand: </b> {brand}</p>
                            <label htmlFor="my-modal-6"  className="btn btn-accent btn-sm animate-bounce w-40 h-6 hover:btn-secondary items-center text-center mt-5">Order Now</label>
                            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                            <div class="modal modal-bottom sm:modal-middle w-full h-full">
                                <div class="modal-box">
                                    <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                    <UserDetails tool={tool}></UserDetails>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link className="btn btn-link text-accent flex justify-end mt-8" to={'/tools'}> See all PC World tools <AiOutlineDoubleRight className='ml-1'></AiOutlineDoubleRight> </Link>
        </div >
    );
};

export default ToolsDetail;