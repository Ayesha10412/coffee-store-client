import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateCoffee = () => {

    const loadedCoffee = useLoaderData();
    const {_id, name, quantity, supplier, taste, category, details, photo } = loadedCoffee;

    const handleUpdateCoffee = event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const  photo = form.photo.value;
    
        const updateCoffee = {name, quantity, supplier, taste, category, details, photo};
        console.log(updateCoffee);
        fetch(`http://localhost:5000/coffee/${_id}`,{
          method: 'PUT',
       headers:{
           'content-type': 'application/json'
       },
       body: JSON.stringify(updateCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          if(data.insertedId){
            Swal.fire({
              title: 'Success!',
              text: 'Coffee updated successfully!!',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
    
          }
        })
    
      }

    return (
       
          <div className='bg-[#F4F3F0] p-24 '>
           <h2 className='text-5xl font-bold text-[#FA8F21] mb-10'>Update Coffee {loadedCoffee.name} </h2>
            <form onSubmit={handleUpdateCoffee} >
              {/* form name and quantity row */}
                <div className='md:flex gap-1 mb-7 '>
                <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Coffee Name</span>
          </label>
          <input type="text" name='name' defaultValue={name} placeholder="Coffee Name" className="input input-bordered" required />
        </div>
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input type="text" name='quantity' defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered" required />
        </div>
                </div>
   {/* form suppliers row  */}
                <div className='md:flex gap-1 mb-7'>
                <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Supplier Name</span>
          </label>
          <input type="text" name='supplier' defaultValue={supplier} placeholder="Supplier Name" className="input input-bordered" required />
        </div>
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Taste</span>
          </label>
          <input type="text" name='taste' defaultValue={taste} placeholder=" Taste" className="input input-bordered" required />
        </div>
                </div>
   {/* form row */}
                <div className='md:flex gap-1 mb-7'>
                <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input type="text" name='category' defaultValue={category} placeholder="Category" className="input input-bordered" required />
        </div>
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input type="text" name='details' defaultValue={details} placeholder="Details" className="input input-bordered" required />
        </div>
                </div>

                <div className='mb-7'>
                <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name='photo' defaultValue={photo} placeholder="Photo URL" className="input input-bordered" required />
        </div>
        </div>

<input type="submit" value="Update Coffee" className='btn btn-block bg-[#D2B48C] text-[#331A15] ' />


            </form>
        </div>
     
    );
};

export default UpdateCoffee;