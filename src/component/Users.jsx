import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Users = () => {

    const loadedUser = useLoaderData();
    const [users, setUsers] = useState(loadedUser)

    const handleUserDelete= id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
           
            // delete from the database
            fetch(`http://localhost:5000/users/${id }`,{
                method:'DELETE',

            })
            .then(res=>res.json())
            .then(data=>{
                console.log('delete is done', data);
                if(data.deletedCount){
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });

            const remainingUsers = users.filter(user=>user._id!=id)  ;
            setUsers(remainingUsers)
                }
            })
            }
          });
    }

    return (
        <div>
          <h2 className='text-3xl font-bold text-center mb-10'>User number: {users.length} </h2>

          <div className="overflow-x-auto text-black font-semibold">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>CreatedAt</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        users.map(user=> 
            <tr key={user._id} >
            <th>1</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.createdAt}</td>
            <td >
            <button className='btn text-green-500 text-3xl mr-2'>E</button>
                <button onClick={()=>handleUserDelete(user._id)} className='btn text-red-500 text-3xl'>x</button>
                </td>
          </tr>
        )
     }
     
    </tbody>
  </table>
</div>

        </div>
    );
};

export default Users;