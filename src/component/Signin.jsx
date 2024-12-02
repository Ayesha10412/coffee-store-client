import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router';

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

        // update last login time
        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const loginInfo = {email, lastSignInTime};

        fetch(`https://coffee-store-server-blond-beta.vercel.app/users`, {

method:'PATCH',
headers:{
    'content-type': 'application/json',
},
body:JSON.stringify(loginInfo)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log('SIgn in info update in db', data);
        })


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
     <p className='text-gray-400'>New To coffee drinker? <Link to='/signup' >Sign Up</Link> </p>
   </form>
 </div>

     </div>
    );
};

export default Signin;