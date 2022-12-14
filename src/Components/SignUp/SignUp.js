import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import logo from '../../../src/img/watchLogo.png'
import googleLogo from '../../../src/img/logo notfound/google logo.png'
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Hooks/Loading';
import toast from "react-hot-toast";

const SignUp = () => {


    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();
    const [createUserWithEmailAndPassword, user, loading, error] =
      useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    // const [token] = useToken(user || gUser)
  
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
  
    let signInError;
  
    if (loading || gLoading || updating) {
      return <Loading></Loading>;
    }
  
    if (error || gError || updateError) {
      signInError = (
        <p className="text-red-500">
          {error?.message || gError?.message || updateError?.message}
        </p>
      );
    }
  
    if (user || gUser) {
  
      navigate(from, { replace: true });
      toast.success("Successfully Login!");
    }
    const onSubmit = async (data) => {
      console.log(data);
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({ displayName: data.name });
      console.log("update done");
    };

    return (
      <div className="flex xl:justify-center lg:justify-center justify-center items-center flex-wrap h-full g-3 my-32 ">
        <div className="">
          <img src={logo} alt="" />
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">SingUp</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">{errors.name.message}</span>
                  )}
                </label>
              </div>

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
                value="Sign Up"
              />
            </form>
            <small>
              {" "}
              <p>
                Already have an account?{" "}
                <Link className="text-primary " to="/login">
                  <span className="text-info">Please Login</span>
                </Link>
              </p>
            </small>
            <div className="divider">OR</div>
            <button
              onClick={() => signInWithGoogle()}
              className="btn text-white border-0 bg-primary btn-outline hover:bg-secondary"
            >
              Continue With Google
              <span className=" ml-4">
                <img src={googleLogo} alt="" />
              </span>
            </button>
          </div>
        </div>
      </div>
    );
};

export default SignUp;