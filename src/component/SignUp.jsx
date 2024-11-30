import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";


const SignUp = () => {

    const {createUser} = useContext(AuthContext)

const handleSignUp = event=>{
    event.preventDefault();
    const form = event.target;
    const name= form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,email,password)
   
    createUser(email,password)
    .then(result=>{
console.log(result.user);
const createdAt = result?.user?.metadata?.creationTime;
const newUser = {name,email,createdAt};
// save new user info to the database
fetch('http://localhost:5000/users',{

    method:'POST',
    headers:{
        'content-type': 'application/json',
    },
    body: JSON.stringify(newUser)

})
.then(res=>res.json())
.then(data=>{
    console.log('User created to db',data);
    if(data.insertedId){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User created successfully",
            showConfirmButton: false,
            timer: 1500
          });
    }
})


    })
    .catch(error=>{
        console.log(error.message)
    })
}

    return (
        <div className='w-11/12 mx-auto'>
           <div className="card bg-base-100  w-full mx-auto max-w-lg px-10 py-10 shadow-2xl shadow-gray-400">
      <form onSubmit={handleSignUp} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>

        </div>
    );
};

export default SignUp;