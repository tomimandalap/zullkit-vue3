<template>
  <div>
    <nav
      class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800"
    >
      <div
        class="container flex flex-wrap items-center justify-between mx-auto my-2"
      >
        <RouterLink to="/" class="flex items-center">
          <img
            src="@/assets/img/logo.svg"
            class="h-8 ml-3 sm:ml-0 sm:h-8"
            alt="Flowbite Logo"
          />
        </RouterLink>
      </div>
    </nav>

    <div data-aos="fade-up" class="relative overflow-hidden bg-white">
      <div class="mx-auto">
        <div
          class="flex flex-col items-center w-full min-h-screen pt-6 justify-center"
        >
          <div class="w-full p-5 mx-auto md:max-w-4xl">
            <h2 class="mb-10 sm:text-5xl text-4xl font-bold text-center">
              <span class="block lg:mb-2">Join & Get Our</span>
              <span class="block">Pro Benefits</span>
            </h2>
          </div>
          <div class="w-full sm:p-5 p-1 mx-auto md:max-w-4xl">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div class="mx-auto md:mx-0 md:block hidden">
                <div class="mb-12">
                  <div class="block mb-2">
                    <svg
                      width="45"
                      height="45"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="inline align-middle"
                    >
                      <circle cx="30" cy="30" r="30" fill="#642DFB" />
                      <path
                        d="M20 35L30 40L40 35"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20 30L30 35L40 30"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M30 20L20 25L30 30L40 25L30 20Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <h3 class="inline-block ml-2 text-lg font-semibold">
                      Customizable
                    </h3>
                  </div>
                  <p class="mt-2 text-lg text-gray-500">
                    Accelerate your work with our millions
                    <br />
                    of ready-to-use design projects.
                  </p>
                </div>
                <div class="mb-12">
                  <div class="block mb-2">
                    <svg
                      width="45"
                      height="45"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="inline align-middle"
                    >
                      <circle cx="30" cy="30" r="30" fill="#1BA37A" />
                      <path
                        d="M30 33C33.866 33 37 29.866 37 26C37 22.134 33.866 19 30 19C26.134 19 23 22.134 23 26C23 29.866 26.134 33 30 33Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M26.21 31.89L25 41L30 38L35 41L33.79 31.88"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <h3 class="inline-block ml-2 text-lg font-semibold">
                      500 Fortune
                    </h3>
                  </div>
                  <p class="mt-2 text-lg text-gray-500">
                    Accelerate your work with our millions
                    <br />
                    of ready-to-use design projects.
                  </p>
                </div>
                <div class="mb-12">
                  <div class="block mb-2">
                    <svg
                      width="45"
                      height="45"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="inline align-middle"
                    >
                      <circle cx="30" cy="30" r="30" fill="#FF6D90" />
                      <path
                        d="M40 21H34C32.9391 21 31.9217 21.4214 31.1716 22.1716C30.4214 22.9217 30 23.9391 30 25V39C30 38.2044 30.3161 37.4413 30.8787 36.8787C31.4413 36.3161 32.2044 36 33 36H40V21Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20 21H26C27.0609 21 28.0783 21.4214 28.8284 22.1716C29.5786 22.9217 30 23.9391 30 25V39C30 38.2044 29.6839 37.4413 29.1213 36.8787C28.5587 36.3161 27.7956 36 27 36H20V21Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <h3 class="inline-block ml-2 text-lg font-semibold">
                      Documentation
                    </h3>
                  </div>
                  <p class="mt-2 text-lg text-gray-500">
                    Accelerate your work with our millions
                    <br />
                    of ready-to-use design projects.
                  </p>
                </div>
              </div>

              <div>
                <form>
                  <div class="mb-4">
                    <label class="block mb-1" for="name">Name</label>
                    <input
                      placeholder="Type your full name"
                      id="name"
                      type="text"
                      name="name"
                      class="block w-full py-3 mt-2 border border-gray-300 rounded-full shadow-sm px-7 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-gray-100"
                    />
                  </div>
                  <div class="mb-4">
                    <label class="block mb-1" for="email">Email Address</label>
                    <input
                      placeholder="Type your email"
                      id="email"
                      type="text"
                      name="email"
                      class="block w-full py-3 mt-2 border border-gray-300 rounded-full shadow-sm px-7 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-gray-100"
                    />
                  </div>
                  <div class="mb-4">
                    <label class="block mb-1" for="password">Password</label>
                    <input
                      placeholder="Type your password"
                      id="password"
                      type="password"
                      name="password"
                      class="block w-full py-3 mt-2 border border-gray-300 rounded-full shadow-sm px-7 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-gray-100"
                    />
                  </div>
                  <div class="mt-6">
                    <button
                      type="button"
                      class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-lg md:px-10 hover:shadow"
                    >
                      Continue Sign Up
                    </button>
                    <RouterLink
                      to="/login"
                      class="inline-flex items-center justify-center w-full px-8 py-3 mt-2 text-base font-medium text-black bg-gray-200 border border-transparent rounded-full hover:bg-gray-300 md:py-2 md:text-lg md:px-10 hover:shadow"
                    >
                      Sign In
                    </RouterLink>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
