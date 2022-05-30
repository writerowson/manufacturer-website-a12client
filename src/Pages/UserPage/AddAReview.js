import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddAReview = () => {
    const [user] = useAuthState(auth)

    const addReview = (e) => {
        e.preventDefault()
    }
    return (
        <div className='text-xs bg-secondary w-full rounded mt-10 px-8'>
            <h1 className='text-2xl font-bold text-accent pt-5 text-center'>Add a review </h1>
            <form onSubmit={addReview} className='grid grid-cols-1 gap-3 justify-items-center   '>

                <div className=' w-full max-w-xs'>
                    <label className="label">
                        <span className="label-text " name="email">User Name</span>
                    </label>
                    <option type="text" name="name" value={user?.displayName || ''}
                        className="input input-bordered input-sm w-full" />
                </div>

                <div className=' w-full max-w-xs'>
                    <label className="label">
                        <span className="label-text " name="email">Your Feedback</span>
                    </label>
                    <textarea className="textarea textarea-bordered input-sm w-full" placeholder="Abc"></textarea>

                </div>

                <div className=' w-full max-w-xs'>
                    <label className="label">
                        <span className="label-text " name="email">Photo</span>
                    </label>

                    <select className="input-group select select-bordered input-sm w-full">
                        <option> <input type="file" className="form-control" id="inputGroupFile01" />Browse file</option>
                        <option type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" ></option>
                    </select>

                </div>

                <div className=' w-full max-w-xs'>
                    <label className="label">
                        <span className="label-text " name="email"> Rating</span>
                    </label>
                    <option
                        type="number"
                        name="productName"
                        defaultValue=""
                        className="input input-bordered input-sm w-full"
                    />
                </div>
                <button className="btn btn-accent btn-sm w-full max-w-xs mb-5">Submit</button>

            </form>

        </div>
    );
};

export default AddAReview;