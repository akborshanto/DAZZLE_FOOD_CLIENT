import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useAuthHook from "../../firebase/authProvider/AuthHook";
const Register = () => {
  /* auth */
  const { createUser, updateProfiles } = useAuthHook();
  // console.log(createUser);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    //console.table(name, email, password, photo);
    /* ========Password validation=========== */
    if (password.length < 6) {
      return toast.error(" PASSEORD Length must be at least 6 character");
    }
    if (!/^(?=.*[A-Z]).{8,}$/.test(password)) {
      return toast.error("Must have an Uppercase letter in the password");
    }
    if (!/^(?=.*[A-Z])(?=.*[a-z]).{8,}$/.test(password)) {
      return toast("Must have a Lowercase letter in the password");
    }

    /* create a user */
    createUser(email, password)
      .then((res) => {
        updateProfiles(name,photo)
        .then(res=>console.log(res.user))
        .catch(err=>console.log(err))

        toast.success("successfully created a account").catch((err) => {
          console.log(err);
        });

        toast.success("Successfully created a User");
      })
      .catch((err) => {
        console.log(err.message);
      });

    /* update profile */
  };

  return (
    <div>
      <section class="relative py-10 bg-gray-900 sm:py-16 lg:py-24">
        <div class="absolute inset-0">
          <img
            class="object-cover w-full h-full"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/signup/2/woman-working-laptop.jpg"
            alt=""
          />
        </div>
        <div class="absolute inset-0 bg-gray-900/20"></div>

        <div class="relative max-w-lg px-4 mx-auto sm:px-0">
          <div class="overflow-hidden bg-white rounded-md shadow-md">
            <div class="px-4 py-6 sm:px-8 sm:py-7">
              <div class="text-center">
                <h2 class="text-3xl font-bold text-gray-900">
                  Create an account
                </h2>
                <p class="mt-2 text-base text-gray-600">
                  Already joined?{" "}
                  <a
                    href="#"
                    title=""
                    class="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
                  >
                    <Link to="/login">Log in now</Link>
                  </a>
                </p>
              </div>

              <form class="mt-8" onSubmit={handleRegister}>
                <div class="space-y-5">
                  <div>
                    <label for="" class="text-base font-medium text-gray-900">
                      {" "}
                      First & Last name{" "}
                    </label>
                    <div class="mt-2.5">
                      <input
                        type="text"
                        name="name"
                        id=""
                        placeholder="Enter your full name"
                        class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label for="" class="text-base font-medium text-gray-900">
                      {" "}
                      Photo Url{" "}
                    </label>
                    <div class="mt-2.5">
                      <input
                        type="text"
                        name="photo"
                        id=""
                        placeholder="Enter your photo url"
                        class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="" class="text-base font-medium text-gray-900">
                      {" "}
                      Email address{" "}
                    </label>
                    <div class="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        id=""
                        placeholder="Enter email to get started"
                        class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="" class="text-base font-medium text-gray-900">
                      {" "}
                      Password{" "}
                    </label>
                    <div class="mt-2.5">
                      <input
                        type="password"
                        name="password"
                        id=""
                        placeholder="Enter your password"
                        class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
