import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuthHook from "../../firebase/authProvider/AuthHook";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useAuthHook();
  console.log(user);
  /* logout */
  const handleLogOut = () => {
    logOut()
      .then((res) => {
        toast.success("Successfully logged out");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  /* links */

  const links = (
    <Fragment>
      <li>
        <NavLink to="/">HOME</NavLink>
      </li>
      <li>
        <NavLink to="/quaries">Quaries</NavLink>
      </li>

      {user && (
        <li>
          <NavLink to="/recomendationForMe">Recommendations For Me</NavLink>
        </li>
      )}

      {/* priveate route */}

    {user && (
      <li>
        <NavLink to="/myquary">My Queries</NavLink>
      </li>
    )} 

      {user && (
        <li>
          <NavLink to="/myReqomendation">My recommendations</NavLink>
        </li>
      )}
    </Fragment>
  );

  return (
    <div className="navbar bg-gray-400">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-sedan">DAZZLE_FOOD</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img
                src={user?.photoURL}
                referrerPolicy="no-referrer"
                title={user?.email}
              />
              <p>{user?.email}</p>
            </div>
          </div>
        ) : (
          ""
        )}

        {user ? (
          <Link to="/login">
            <button
              onClick={handleLogOut}
              class="cursor-pointer uppercase bg-white font-bold my-6 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition  text-black"
            >
              LOGOUT
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button class="cursor-pointer uppercase bg-white font-bold my-6 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition  text-black">
              LOGIN
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
