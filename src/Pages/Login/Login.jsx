import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/SociaLogin/SocialLogin';

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const { signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const  from = location.state?.from?.pathname || "/";

  useEffect(()=>{
    loadCaptchaEnginge(6); 
  },[])

    const handleLogin = event =>{
        event.preventDefault();
              const form = event.target;
              const email = form.email.value;
              const password = form.password.value;
              console.log(email, password);

              signIn(email, password)
              .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "USER LOGIN SUCCESSFULLY",
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });
                  navigate("/", form, {replace: true});
              })
              .catch()
    }

    const handleCaptcha = (e) =>{
        const user_captcha_value= e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
   
    }

    return (
        <>
        <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
        <div className="hero min-h-screen bg-base-200 w-[90%] mx-auto my-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className="  mr-12">
                    <img src={img} className='w-[400px]' alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <h1 className="text-5xl font-bold text-center">Login</h1>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <LoadCanvasTemplate />
                            </label>
                            <input type="text" onBlur={handleCaptcha} name='captcha' placeholder="type of the text above" className="input input-bordered" required />                     
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={false} className="btn bg-[#D1A054B2] " type="submit" value="Login" />
                           
                        </div>
                    </form>
                    <p className='my-4 text-center'>New here? Create a New Account <Link className='text-orange-600 font-bold' to="/signUp">SignUp</Link> </p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;