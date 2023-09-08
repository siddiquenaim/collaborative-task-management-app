import "./Banner.css";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-banner">
      <div className="hero-content text-neutral-content">
        <div className="lg:flex gap-5">
          <div className="lg:w-[50%]">
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
          <div className="lg:w-[50%]">div-2</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
