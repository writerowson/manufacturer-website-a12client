import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth)
    console.log(user.email, user.name);
    useEffect(() => {
        if (user) {
            fetch(`https://secure-brook-18668.herokuapp.com/tools?userEmail=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user])


    return (
        <div className='text-accent mt-8'>
            <h1 className='text-white'>  Total Orders {orders.length}</h1>
            <div className="overflow-x-auto my-10 ">
                <table className=" bg-secondary table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => <tr>
                            <th>1</th>
                            <td>{order.userName}</td>
                            <td>{order.phone}</td>
                            <td>{order.name}</td>
                            <td>{order.price}</td>
                            <td>{order.quantity}</td>
                            <td></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;