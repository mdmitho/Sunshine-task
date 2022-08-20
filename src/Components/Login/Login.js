import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Hooks/Loading';
import logo from '../../../src/img/watchLogo.png'
import googleLogo from '../../../src/img/logo notfound/google logo.png'
import toast from "react-hot-toast";

const Login = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();
    const [signInWithEmailAndPassword, user, loading, error] =
      useSignInWithEmailAndPassword(auth);
  //   const [token] = useToken(user || gUser);
    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/home";
  
    useEffect(() => {}, [user, gUser, from, navigate]);
  
    if (loading || gLoading) {
      return <Loading></Loading>;
  
    }
  
    if (error || gError) {
      signInError = <p className="text-red-500">{error?.message || gError?.message}</p>;
    }
  
    if (user ||gUser) {
      navigate("/");
      toast.success("Successfully Login!");
    }
    const onSubmit = (data) => {
      // console.log(data);

      signInWithEmailAndPassword(data.email, data.password);
    };


    return (
      <div className=" flex xl:justify-center lg:justify-center justify-center items-center flex-wrap h-full g-3 my-32">
        <div className="">
          <img src={logo} alt="" />
        </div>
        <div className="card w-96 bg-base-100 shadow-xl ">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Login</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">{errors.email.message}</span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">{errors.email.message}</span>
                  )}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Your Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 Characters or longer",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {signInError}
              <input
                className="btn bg-primary border-0 w-full max-w-xs text-white hover:bg-secondary"
                type="submit"
                value="login"
              />
            </form>
            <small>
              {" "}
              <p>
                You Don't have a Account?{" "}
                <Link className="text-primary " to="/signUp">
                  <span className="text-info">Create New Account</span>
                </Link>
              </p>
            </small>
            <div className="divider">OR</div>
            <button
              onClick={() => signInWithGoogle()}
              className="btn text-white border-0 bg-primary btn-outline hover:bg-secondary"
            >
              Continue With Google{" "}
              <span className=" ml-4">
                <img src={googleLogo} alt="" />
              </span>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Login;