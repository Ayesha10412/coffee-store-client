import React from 'react';

const AddCoffee = () => {
    return (
        <div>
            <form >
                <div className='w-[50%] mx-auto'>
                <div className="form-control">
          <label className="label">
            <span className="label-text">Coffee Name</span>
          </label>
          <input type="email" placeholder="Coffee Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input type="email" placeholder="Available Quantity" className="input input-bordered" required />
        </div>
 
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;