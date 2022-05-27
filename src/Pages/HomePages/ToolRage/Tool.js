import React from 'react';
import { BsStarFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {

    const { _id, img, name, price, description, brand, quantity, tools } = tool

    const navigate = useNavigate()
    const showToolDetails = id => {
        navigate(`/tools/${_id}`)
        console.log(_id);
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl my-8">
            <figure className="px-10 pt-10">
                <img src={img} alt="tool" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">{name}</h2>
                <p className='text-left text-sm'>{description}</p>
                <p><b>Brand: </b>{brand}</p>
                <p><b> Quantity: </b>{tools} pieces</p>
                <p><b>Price: </b>{price}</p>
                <div className="card-actions">
                    <button onClick={() => showToolDetails(_id)} className="btn btn-accent btn-sm animate-bounce w-40 h-6 hover:btn-primary">Order Now</button>
                </div>
            </div >

        </div >
    );
};

export default Tool;