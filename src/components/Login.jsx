import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';


const Login = () => {
const {loginUser} = useContext(AuthContext);

    const handleLoginForm = (e)=>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email,password)
        .then(result => {
            //last login time update
        const lastLoginTime = result?.user?.metadata?.lastSignInTime;
        const loginInfo  = {email, lastLoginTime};
        fetch(`http://localhost:5000/users`,{
            method: "PATCH",
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(loginInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log("Login info updated in db", data);
        })

        })
        .catch((error)=>{
            console.log("error", error);
        })
    }


    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Indulge in the rich aroma and flavor of our expertly crafted coffee blends, paired with a cozy ambiance that feels like home. Whether you're a coffee connoisseur or just looking for a warm escape, our café is the perfect spot to savor every moment!
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLoginForm} className="card-body">

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
            <Link to="/signup" className='bg-red-200 btn mt-2'>Go Signup!</Link>
          </form>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Login;