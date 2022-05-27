import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const UserDetails = ({ tool }) => {
    const { name, price, quantity } = tool
    const [user] = useAuthState(auth)


    const handleBooking = (e) => {
        e.preventDefault()
        const order = { name, price, quantity, userName: user?.displayName, userEmail: user?.email }
        console.log(order);
        fetch("http://localhost:5000/order", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.insertedId) {
                    alert("Task added");

                    e.target.reset();
                } else {
                    alert("Failed to add task");
                }
            });
    }

    return (
        <div>
            <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2  '>

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
                        <span className="label-text " name="email">Price</span>
                    </label>
                    <input type="text" name="productName" defaultValue={price} placeholder='$'
                        className="input input-bordered w-full" />
                </div>

                <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />

                <input type="submit" value="Ordered" className="btn btn-accent btn-sm w-full max-w-xs" />
            </form>
        </div>
    );
};

export default UserDetails;