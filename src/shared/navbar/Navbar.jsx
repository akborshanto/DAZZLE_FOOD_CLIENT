import React, { Fragment, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuthHook from "../../firebase/authProvider/AuthHook";
import { toast } from "react-toastify";
import logo from "../../assets/10462349.png";
const Navbar = () => {
  /* theme */
  const [theme, setTheme] = useState("light");
  const { user, logOut } = useAuthHook();
  // console.log(user);
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

  /* theme add  and save the localStorage */

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleTheme = (e) => {
    /* condition */
    if (e.target.checked) {
      setTheme("light");
    } else {
      setTheme("retro");
    }
  };

  /* links */

  const links = (
    <Fragment>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-r from-purple-400 to-cyan-600  text-white"
              : " border  "
          }
        >
          HOME
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/quaries"
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-r from-purple-400 to-cyan-600  text-white"
              : " border  "
          }
        >
          Quaries
        </NavLink>
      </li>

      {/* 
      <li>
        <NavLink to="/quaries">Quaries</NavLink>
      </li> */}
{/* 
      <li>
        <NavLink to="/pagination">pagination</NavLink>
      </li> */}

      {user && (
        <li>
          <NavLink
            to="/recomendationForMe"
            className={({ isActive }) =>
              isActive
                ? "bg-gradient-to-r from-purple-400 to-cyan-600  text-white"
                : " border  "
            }
          >
            Recommendations For Me
          </NavLink>
        </li>
      )}

      {/* priveate route */}

      {user && (

        <li>
        <NavLink
          to="/myquary"
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-r from-purple-400 to-cyan-600  text-white"
              : " border  "
          }
        >
        My Queries
        </NavLink>
      </li>



     
      )}

      {user && (
        <li>
        <NavLink
          to="/myReqomendation"
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-r from-purple-400 to-cyan-600  text-white"
              : " border  "
          }
        >
        My recommendations
        </NavLink>
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
            className=" z-10 menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100  rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost  font-sedan  text-14px md:text-[20px] lg:text-2xl ">
        <img src={logo} alt="" className="w-8" />
          QUERY PD     
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <input
          type="checkbox"
          className="toggle toggle-error"
          onClick={handleTheme}
        />

        {user ? (
          <div className="avatar mx-4">
            <div className="w-8 lg:w-10 rounded-full">
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
              class="cursor-pointer uppercase bg-white font-bold my-6 lg:px-4 lg:py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition  text-black"
            >
              LOGOUT
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button class="cursor-pointer uppercase bg-white font-bold my-6 lg:px-4 lg:py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition  text-black">
              LOGIN
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
