import { FaEye, FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const COffeeCard = ({ coffee,coffees, setCoffees }) => {
    

    const {_id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelete=_id=>{
        console.log(_id);
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
           

              fetch(`https://coffee-store-server-blond-beta.vercel.app/${_id}`,{
                method:'DELETE',
               
              })
              .then(res=>res.json())
              .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                    Swal.fire(
                        "Deleted!",
                        "Your Coffee has been deleted.",
                        "success"
                      );

                      const remaining = coffees.filter(cof=>cof._id!=_id);
                    setCoffees(remaining);
                }
              })

            }
          });
    }

    return (
        <div>
            <div className="card bg-base-100  shadow-xl flex flex-row  ">
                <div className="">
                    <img
                        src={photo}
                        alt=""
                        className="rounded-xl w-full h-[200px] " />
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name:{name} </h2>
                    <p>{details}</p>

                </div>
                <div className="card-actions flex flex-col gap-2">
                    <button className="bg-[#D2B48C] text-lg  text-white p-3 rounded-lg "><FaEye></FaEye></button>
                  <Link to={`updateCoffee/${_id}`} >  
                  <button className="bg-[#3C393B] text-lg text-white p-3 rounded-lg "><FaPencil></FaPencil></button>
                  </Link>
                    <button onClick={()=>handleDelete(_id)} className="bg-[#EA4744] text-lg text-white p-3 rounded-lg "><MdDelete></MdDelete></button>
                </div>
            </div>
        </div>
    );
};

export default COffeeCard;