import { useContext, useState } from "react";
import "./Banner.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Banner = () => {
  const { logIn, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showError, setShowError] = useState("");

  const handleLoginIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then((result) => {
        console.log(result);
        Swal.fire({
          icon: "success",
          title: "Logged in Successfully",
          showConfirmButton: true,
          timer: 1500,
        });
        setShowError("");
        navigate("/");
        form.reset();
      })
      .catch((error) => setShowError(error.message));
  };

  return (
    <div className="hero min-h-screen bg-banner">
      <div className="hero-content text-neutral-content">
        <div className="lg:flex gap-14 items-center">
          <div className="lg:w-[50%] mx-auto">
            <h1 className="pb-5 text-5xl font-bold">Track and Manage Task</h1>
            <p className="pb-5 lg:mx-auto text-xl">
              Welcome to TaskTrackcer, your all-in-one solution for efficient
              task management. Organize your team's work, set priorities, track
              progress, and stay on top of deadlines with ease. Whether you're a
              project manager or a team member, our platform empowers you to
              collaborate seamlessly and achieve your goals. Try it now and
              experience the future of task management!
            </p>
          </div>
          <div className="lg:w-[50%] mx-auto">
            {!user ? (
              <div className="flex justify-center items-center">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#ffffffea]">
                  <form onSubmit={handleLoginIn} className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        placeholder="email"
                        className="input input-bordered text-black"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input
                        name="password"
                        type="password"
                        placeholder="password"
                        className="input input-bordered text-black"
                      />
                      <label className="label">
                        <a href="#" className="label-text-alt link link-hover">
                          Forgot password?
                        </a>
                      </label>
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn bg-[#2B3440] text-white hover:bg-[#0218179c] normal-case">
                        Login
                      </button>
                    </div>
                    <div className="text-black text-center mt-2">
                      New to TaskTracker?{" "}
                      <Link to="/register" className="text-blue-500">
                        Register
                      </Link>
                    </div>
                    {showError && (
                      <p className="text-red-600 text-center">{showError}</p>
                    )}
                  </form>
                </div>
              </div>
            ) : (
              <div className="flex justify-center">
                <Link to="/team">
                  <button className="btn normal-case">
                    Start Your Journey
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
