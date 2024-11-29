import React from 'react';

const AddCoffee = () => {

  const handleAddCoffee = event=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const  photo = form.photo.value;

    const newCoffee = {name, quantity, supplier, taste, category, details, photo};
    console.log(newCoffee)

  }


    return (
        <div className='bg-[#F4F3F0] p-24 '>
          <h2 className='text-3xl font-extrabold text-[#374151] mb-8 '>Add a Coffee</h2>
            <form onSubmit={handleAddCoffee} >
              {/* form name and quantity row */}
                <div className='md:flex gap-1 mb-7 '>
                <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Coffee Name</span>
          </label>
          <input type="text" name='name' placeholder="Coffee Name" className="input input-bordered" required />
        </div>
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input type="text" name='quantity' placeholder="Available Quantity" className="input input-bordered" required />
        </div>
                </div>
   {/* form suppliers row  */}
                <div className='md:flex gap-1 mb-7'>
                <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Supplier Name</span>
          </label>
          <input type="text" name='supplier' placeholder="Supplier Name" className="input input-bordered" required />
        </div>
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Taste</span>
          </label>
          <input type="text" name='taste' placeholder=" Taste" className="input input-bordered" required />
        </div>
                </div>
   {/* form row */}
                <div className='md:flex gap-1 mb-7'>
                <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input type="text" name='category' placeholder="Category" className="input input-bordered" required />
        </div>
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input type="text" name='details' placeholder="Details" className="input input-bordered" required />
        </div>
                </div>

                <div className='mb-7'>
                <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
        </div>
        </div>

<input type="submit" value="Add Coffee" className='btn btn-block bg-[#D2B48C] text-[#331A15] ' />


            </form>
        </div>
    );
};

export default AddCoffee;