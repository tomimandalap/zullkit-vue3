<script setup>
const checkout = (price) => {
  console.log('THIS', price)
}
</script>
<template>
  <main>
    <div class="relative overflow-hidden bg-white">
      <div class="mx-auto">
        <div
          class="flex flex-col items-center w-full sm:justify-center sm:pt-0"
        >
          <div data-aos="fade-up" class="w-full p-5 mx-auto mt-10 md:max-w-7xl">
            <h2 class="mb-4 text-5xl font-bold text-center">
              <span class="block lg:mb-2">Friendly Pricing,</span>
              <span class="block">High Quality Design</span>
            </h2>
            <p class="mb-5 text-lg text-center text-gray-500">
              Working faster and better than before
            </p>
          </div>

          <div data-aos="fade-up" class="w-full p-5 mx-auto mb-10 md:max-w-4xl">
            <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <div class="p-8 border rounded-3xl">
                  <h1 class="text-5xl font-semibold">
                    IDR 2,000
                    <span class="text-xl font-light text-gray-500">/month</span>
                  </h1>
                  <h2 class="text-lg font-semibold mt-7">Basic Plan</h2>
                  <p class="mb-6 text-gray-500">Suitable for new team</p>
                  <ul class="mb-6 text-gray-700">
                    <li class="mb-3">
                      <img
                        src="@/assets/img/icon-check.png"
                        class="float-left w-6 mr-2"
                      />
                      Customizable layers
                    </li>
                    <li class="mb-3">
                      <img
                        src="@/assets/img/icon-check.png"
                        class="float-left w-6 mr-2"
                      />
                      Official documentation
                    </li>
                    <li class="mb-3">
                      <img
                        src="@/assets/img/icon-check.png"
                        class="float-left w-6 mr-2"
                      />
                      SVG icons
                    </li>
                    <li class="mb-3">
                      <img
                        src="@/assets/img/icon-check.png"
                        class="float-left w-6 mr-2"
                      />
                      SVG illustrations
                    </li>
                    <li class="mb-3">
                      <img
                        src="@/assets/img/icon-check.png"
                        class="float-left w-6 mr-2"
                      />
                      Pre-built design screen
                    </li>
                  </ul>
                  <button
                    @click="checkout(2000)"
                    class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-black bg-gray-200 border border-transparent rounded-full hover:bg-gray-300 md:py-2 md:text-md md:px-10 hover:shadow"
                  >
                    Checkout Now
                  </button>
                </div>
              </div>
              <div>
                <div class="p-8 border rounded-3xl">
                  <h1 class="text-5xl font-semibold">
                    IDR 9,000
                    <span class="text-xl font-light text-gray-500">/month</span>
                  </h1>
                  <h2 class="text-lg font-semibold mt-7">Gold Plan</h2>
                  <p class="mb-6 text-gray-500">Suitable for big company</p>
                  <ul class="mb-6 text-gray-700">
                    <li class="mb-3">
                      <img
                        src="@/assets/img/icon-check.png"
                        class="float-left w-6 mr-2"
                      />
                      Customizable layers
                    </li>
                    <li class="mb-3">
                      <img
                        src="@/assets/img/icon-check.png"
                        class="float-left w-6 mr-2"
                      />
                      Official documentation
                    </li>
                    <li class="mb-3">
                      <img
                        src="@/assets/img/icon-check.png"
                        class="float-left w-6 mr-2"
                      />
                      SVG icons
                    </li>
                    <li class="mb-3">
                      <img
                        src="@/assets/img/icon-check.png"
                        class="float-left w-6 mr-2"
                      />
                      SVG illustrations
                    </li>
                    <li class="mb-3">
                      <img
                        src="@/assets/img/icon-check.png"
                        class="float-left w-6 mr-2"
                      />
                      Pre-built design screen
                    </li>
                    <li class="mb-3">
                      <img
                        src="@/assets/img/icon-check.png"
                        class="float-left w-6 mr-2"
                      />
                      Coded template
                    </li>
                    <li class="mb-3">
                      <img
                        src="@/assets/img/icon-check.png"
                        class="float-left w-6 mr-2"
                      />
                      Support 24/7
                    </li>
                    <li class="mb-3">
                      <img
                        src="@/assets/img/icon-check.png"
                        class="float-left w-6 mr-2"
                      />
                      Private designer group
                    </li>
                    <li class="mb-3">
                      <img
                        src="@/assets/img/icon-check.png"
                        class="float-left w-6 mr-2"
                      />
                      Unlock cloning app
                    </li>
                  </ul>
                  <button
                    @click="checkout(9000)"
                    class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-md md:px-10 hover:shadow"
                  >
                    Checkout Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" class="w-full p-5 mx-auto mb-10 md:max-w-7xl">
            <div class="grid grid-cols-1 gap-4 mx-auto md:grid-cols-3 md:mx-0">
              <div class="mb-12">
                <div class="flex items-center mb-2">
                  <img
                    src="@/assets/img/icon-customizable.svg"
                    alt="icon-customizable"
                  />
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
                <div class="flex items-center mb-2">
                  <img src="@/assets/img/icon-fortune.svg" alt="icon-fortune" />
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
                <div class="flex items-center mb-2">
                  <img src="@/assets/img/icon-book.svg" alt="icon-book" />
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
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
