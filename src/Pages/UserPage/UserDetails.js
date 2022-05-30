import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';
const UserDetails = ({ tool }) => {
    const { name, price, quantity } = tool
    const [user] = useAuthState(auth)


    const handleOrder = (e) => {
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
        <div className='text-xs '>

            <h1 className='text-2xl font-bold text-accent'>Order Form </h1>
            <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center   '>

                <div className=' w-full max-w-xs'>
                    <label className="label">
                        <span className="label-text " name="email">Product Name</span>
                    </label>
                    <option type="text" name="productName" value={name || ""}
                        className="input input-bordered input-sm w-full" />
                </div>
                <div className=' w-full max-w-xs'>
                    <label className="label">
                        <span className="label-text " name="email">User Name</span>
                    </label>
                    <option type="text" name="productName" value={user?.displayName || ''}
                        className="input input-bordered input-sm w-full" />
                </div>
                <div className=' w-full max-w-xs'>
                    <label className="label">
                        <span className="label-text " name="email">User Email</span>
                    </label>
                    <option type="text" name="productName" value={user?.email || ''} disabled
                        className="input input-bordered input-sm w-full" />
                </div>
                <div className=' w-full max-w-xs'>
                    <label className="label">
                        <span className="label-text " name="email"> Order Quantity</span>
                    </label>
                    <option
                        type="number"
                        name="productName"
                        defaultValue={quantity}
                        className="input input-bordered input-sm w-full"
                    />
                </div>
                <div className=' w-full max-w-xs'>
                    <label className="label">
                        <span className="label-text " name="email">Total Amount</span>
                    </label>
                    <option type="text" name="productName" defaultValue={price} placeholder='$'
                        className="input input-bordered input-sm w-full" />
                </div>

                <option htmlFor="my-modal-6" type="submit" value="Ordered" className="btn btn-accent btn-sm w-full max-w-xs" />

            </form>

        </div>
    );
};

export default UserDetails;