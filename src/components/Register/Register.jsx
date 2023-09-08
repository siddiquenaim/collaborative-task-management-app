import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showError, setShowError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const bio = form.bio?.value;

    const userData = {
      name,
      photo,
      email,
      bio,
      createdTeams: [],
      joinedTeams: [],
    };

    createUser(email, password)
      .then((result) => {
        saveUserDataToLocalStorage(result.user.uid, userData);
        console.log(result);
        updateUserData(result.user, name, photo);
        form.reset();
        setShowError("");
        signOut();
        navigate("/");
      })
      .catch((error) => setShowError(error.message));

    const updateUserData = (user, name, photo) => {
      updateProfile(user, {
        displayName: name,
        photoURL: photo,
      });
    };

    const signOut = () => {
      logOut()
        .then(() => {})
        .catch((error) => console.log(error));
    };
    // function to save user data to local storage
    const saveUserDataToLocalStorage = (userId, userData) => {
      const usersData = JSON.parse(localStorage.getItem("usersData")) || {};
      usersData[userId] = userData;
      localStorage.setItem("usersData", JSON.stringify(usersData));
    };
  };

  return (
    <div className="hero min-h-screen bg-base-200 py-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left lg:w-[50%] mx-auto">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6 w-[75%] mx-auto lg:w-full">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            dolorum corporis itaque optio sint maxime dicta neque facere,
            repellat, iste incidunt molestias, fugit iure enim veniam nemo eaque
            libero consequuntur quod commodi fugiat ullam! Beatae et enim
            eligendi eaque dolorem odit consequuntur maxime, est assumenda quo
            rem impedit molestias ipsum.
          </p>
        </div>
        <div className="lg:w-[50%] mx-auto card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
              <label className="label">
                <span className="label-text">Bio</span>
              </label>
              <input
                type="text"
                name="bio"
                placeholder="About you"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <p className="text-red-600">{showError && showError.slice(9)}</p>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <div>
              <p className="text-center mt-3 font-semibold">
                Already has an account?{" "}
                <Link to="/" className="text-blue-600">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;