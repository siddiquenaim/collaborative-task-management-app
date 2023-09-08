import "./Banner.css";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-banner">
      <div className="hero-content text-neutral-content">
        <div className="lg:flex gap-14 items-center">
          <div className="lg:w-[50%] mx-auto">
            <h1 className="mb-5 text-5xl font-bold">Track and Manage Task</h1>
            <p className="mb-5 lg:mx-auto text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              obcaecati sapiente quisquam autem eius fugiat eligendi suscipit,
              laborum, expedita optio, tempora doloribus at! Earum repellat
              natus impedit repudiandae fuga dolorum?
            </p>
            {/* {!user ? (
          <Link to="/login">
            <button className="btn btn-custom normal-case">
              Start Food Journey
            </button>
          </Link>
        ) : (
          ""
        )} */}
          </div>
          <div className="lg:w-[50%] mx-auto">
            <div className="flex justify-center items-center">
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="text"
                      placeholder="password"
                      className="input input-bordered"
                    />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                  </div>
                  <div className="text-black text-center mt-2">
                    Already has an account?{" "}
                    <a href="/register" className="text-blue-500">
                      Register
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
