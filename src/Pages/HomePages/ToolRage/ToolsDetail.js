import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AiOutlineDoubleRight } from 'react-icons/ai'
import UserDetails from '../../UserPage/UserDetails';



const ToolsDetail = () => {
    const { toolId } = useParams()
    const [tool, setTools] = useState({})
    const { img, name, description, price, brand, tools, quantity } = tool

    useEffect(() => {
        const url = `http://localhost:5000/tools/${toolId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTools(data))
    }, [toolId])

    return (
        <div className='text-center  text-sm   '>
            {/* <div className="  grid lg:grid-cols-2 sm:grid-cols-1 gap-40 my-8 mx-20"> */}
            <div className=" grid sm:grid-cols-1 lg:grid-cols-2 gap-8 my-8 mx-20 drop-shadow-lg ">
                <div className=" flex-grow card rounded-box place-items-center  ">
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={img} alt="" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{name}</h2>
                            <p className='text-start '>{description}.</p>
                            <h2><b>Price:</b>{price}</h2>
                            <p><b>Available Quantity: </b>{tools} pieces</p>
                            <p><b>Minimum Quantity: </b>{quantity} pieces</p>
                            <p><b>Brand: </b> {brand}</p>
                        </div>

                        <label for="my-modal-6" class="btn modal-button">open modal</label>


                        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                        <div class="modal modal-bottom sm:modal-middle">
                            <div class="modal-box">
                                <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
                                <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                <div class="modal-action">
                                    <label for="my-modal-6" class="btn">Yay!</label>
                                </div>
                            </div>
                        </div>
                    </div></div>


                <div className="card  bg-base-100 shadow-xl">
                    <div className="card-body">



                        <UserDetails tool={tool}></UserDetails>

                    </div>
                </div>
            </div>
            <Link className="btn btn-link text-accent flex justify-end mt-8" to={'/tools'}> See all PC World tools <AiOutlineDoubleRight className='ml-1'></AiOutlineDoubleRight> </Link>
        </div >
    );
};

export default ToolsDetail;