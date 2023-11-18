import { Link } from "react-router-dom";
import img from '../../assets/others/authentication2.png'
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const {createUser} = useContext(AuthContext);

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser =  result.user;
            console.log(loggedUser);
        })
        .catch(error => {
          console.log(error);
        })
    }

    // const handleSignUp = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     console.log(email, password);
    // }

    return (
       <>
        <Helmet>
                <title>Bistro Boss | signUp</title>
            </Helmet>
        <div className="hero min-h-screen bg-base-200 w-[90%] mx-auto my-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className="  mr-12">
                    <img src={img} className='w-[400px]' alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <h1 className="text-5xl font-bold text-center">SignUp</h1>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered" required />
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" required />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20 })} name='password' placeholder="password" className="input input-bordered" required />
                            {errors.password?.type === "required" && (
                                <p className=" text-red-600">password must be 6 letter</p> )}

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-[#D1A054B2] " type="submit" value="SignUp" />
                        </div>
                    </form>
                    <p className='my-4 text-center'>Already registered? Go to log in <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                </div>
            </div>
        </div>
       </>
    );
};

export default SignUp;