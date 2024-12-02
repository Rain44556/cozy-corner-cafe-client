import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div>
            <Link to="/signup" className='bg-red-200 btn m-10'>Go Signup!</Link>
        </div>
    );
};

export default Login;