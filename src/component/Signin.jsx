import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Signin = () => {

    const {signInUser} = useContext(AuthContext);

const handleSignIn= e =>{
    e.preventDefault();
    const email    = e.target.email.value;
    const password = e.target.password.value; 
    console.log(email, password);
    signInUser(email, password)
    .then(result=>{
        console.log(result.user);
    })
    .catch(error=>{
        console.log(error.message)
    })
}

    return (
        <div className='w-11/12 mx-auto'>
        <div className="card bg-base-100  w-full mx-auto max-w-lg px-10 py-10 shadow-2xl shadow-gray-400">
   <form onSubmit={handleSignIn} className="card-body">
  
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

export default Signin;