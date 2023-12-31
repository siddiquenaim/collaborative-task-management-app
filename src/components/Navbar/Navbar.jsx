import { useContext } from "react";
import { FaPenToSquare } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            {user && (
              <>
                <li>
                  <NavLink to="profile">Profile</NavLink>
                </li>
                <li>
                  <NavLink to="team">Your Team</NavLink>
                </li>
                <li>
                  <NavLink to="joined-teams">Joined Teams</NavLink>
                </li>
                <li>
                  <NavLink to="dashboard">Dashboard</NavLink>
                </li>
              </>
            )}
            {!user && (
              <>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        <a className="font-semibold text-xl ms-4 flex items-center justify-center">
          <FaPenToSquare className="mr-2"></FaPenToSquare> TaskTracker
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink to="profile">Profile</NavLink>
              </li>
              <li>
                <NavLink to="team">Your Team</NavLink>
              </li>
              <li>
                <NavLink to="joined-teams">Joined Teams</NavLink>
              </li>
              <li>
                <NavLink to="dashboard">Dashboard</NavLink>
              </li>
            </>
          )}
          {!user && (
            <>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user && (
          <a
            onClick={handleLogOut}
            className="btn lg:me-4 bg-[#2B3440] text-white hover:bg-[#0218179c] normal-case"
          >
            Logout
          </a>
        )}
      </div>
    </div>
  );
};

export default Navbar;
