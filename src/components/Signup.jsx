import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Signup = () => {
  const { signUpUser } = useContext(AuthContext);

  const handleLoginForm = e => {
    e.preventDefault();

    const signupForm = e.target;
    const name = signupForm.name.value;
    const email = signupForm.email.value;
    const password = signupForm.password.value;

    signUpUser(email, password)
      .then(result => {
        console.log('created  user at firebase', result.user);
        const createdAt = result?.user?.metadata?.creationTime;

        const newUser = {name, email, createdAt}
        //save new user info to the database
        fetch('http://localhost:5000/users',{
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newUser)
        })
          .then(res => res.json())
          .then(data => {
           if(data.insertedId){
            console.log('user created in db')
           }
          })
      })
      .catch((error) => {
        console.log("error", error.message);
      })

    console.log(email, password, signupForm)
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Join the Coffee Lovers' Club! Sign up now and savor the flavor of every moment!</h1>
          <p className="py-6">
            Indulge in the rich aroma and flavor of our expertly crafted coffee blends, paired with a cozy ambiance that feels like home. Whether you're a coffee connoisseur or just looking for a warm escape, our café is the perfect spot to savor every moment!
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLoginForm} className="card-body">

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
    </div>
  );
};

export default Signup;