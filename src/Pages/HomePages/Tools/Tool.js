import React from 'react';

const Tool = ({ tool }) => {

    const { _id, img, name, price, description, brand, quantity, other } = tool
    return (

        <div class="card w-96 bg-base-100 shadow-xl my-8">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 className="card-title text-2xl">{name}</h2>
                <p className='text-left text-sm'>{description}</p>
                <p><b>Brand: </b>{brand}</p>
                <p><b>Quantity: </b>{quantity} pieces</p>
                <p><b>Price: </b>{price}</p>
                <div class="card-actions">
                    <button className="btn btn-secondary btn-sm animate-bounce w-40 h-6 hover:btn-primary">Order Now</button>
                </div>
            </div >

        </div >
    );
};

export default Tool;