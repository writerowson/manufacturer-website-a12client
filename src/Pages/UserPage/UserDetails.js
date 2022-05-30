import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const UserDetails = ({ tool }) => {
    const { name, price, quantity } = tool
    const [user] = useAuthState(auth)


    const handleBooking = (e) => {
        e.preventDefault()
        const order = { name, price, quantity, userName: user?.displayName, userEmail: user?.email }
        console.log(order);
        fetch("https://secure-brook-18668.herokuapp.com/order", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.insertedId) {
                    toast("Congratulation! Order Completed");

                    e.target.reset();
                } else {
                    toast("Failed to Place any order");
                }
            });
    }

    return (
        <div className='text-sm'>
            <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2  '>
                <h1 className='text-2xl font-bold text-accent'>Order Form </h1>
                <div className=' w-full max-w-xs'>
                    <label className="label">
                        <span className="label-text " name="email">Product Name</span>
                    </label>
                    <input type="text" name="productName" value={name || ""}
                        className="input input-bordered w-full" />
                </div>
                <div className=' w-full max-w-xs'>
                    <label className="label">
                        <span className="label-text " name="email">User Name</span>
                    </label>
                    <input type="text" name="productName" value={user?.displayName || ''}
                        className="input input-bordered w-full" />
                </div>
                <div className=' w-full max-w-xs'>
                    <label className="label">
                        <span className="label-text " name="email">User Email</span>
                    </label>
                    <input type="text" name="productName" value={user?.email || ''} disabled
                        className="input input-bordered w-full" />
                </div>
                <div className=' w-full max-w-xs'>
                    <label className="label">
                        <span className="label-text " name="email">Quantity</span>
                    </label>
                    <input type="number" name="productName" defaultValue={quantity}
                        className="input input-bordered w-full" />
                </div>

                <div className=' w-full max-w-xs'>
                    <label className="label">
                        <span className="label-text " name="email">Phone Number</span>
                    </label>
                    <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                </div>


                <input type="submit" value="Ordered" className="btn btn-accent btn-sm w-full max-w-xs" />
            </form>
        </div>
    );
};

export default UserDetails;

