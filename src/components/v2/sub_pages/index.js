<div class="h-screen w-screen flex flex-col justify-between">
  <nav    class="bg-gray-200 shadow border-gray-200 bg-white sticky w-full px-2 py-2.5 sm:px-4 z-20 top-0 left-0 border-b">
    <div
      class="flex flex-wrap items-center justify-center xs:justify-start gap-3 md:gap-0 md:justify-between md:flex-nowrap">
      <a href="/src/index.html"
         class="flex w-full basis-auto items-center justify-center xs:basis-2/4 md:basis-2/6 xs:justify-start lg:basis-5/12">
        <img src="https://flowbite.com/docs/images/logo.svg"
             class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
        <span
          class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Logo</span>
      </a>
      <div class="relative flex w-full basis-auto md:basis-3/12">
        <div
          class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg class="h-5 w-5 text-gray-500" aria-hidden="true"
               fill="currentColor" viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"></path>
          </svg>
          <span class="sr-only">Search icon</span>
        </div>
        <input type="text" id="search-navbar"
               class="w-full rounded-lg border border-gray-300 bg-gray-50 pl-10 pr-2 py-2 text-sm text-gray-900 focus:border-blue-600 focus:ring-blue-600 dark:placeholder-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white md:w-52 lg:w-60 dark:focus:border-blue-600 dark:focus:ring-blue-600"
               placeholder="Search..."/>
      </div>
      <div
        class="flex w-full basis-auto justify-around md:basis-3/12">
        <a href="/src/pages/admin_usuarios.html">
          <button type="button"
                  class="p-2 text-white bg-blue-600 hover:bg-blue-600/90 focus:ring-4 focus:outline-none focus:ring-blue-600/50 font-medium rounded-full text-sm text-center inline-flex items-center dark:focus:ring-blue-600/55">
            <svg class="h-5 w-5" fill="none" stroke="currentColor"
                 stroke-width="1.5" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"></path>
            </svg>
          </button>
        </a>
        <button type="button"
                data-drawer-target="drawer-cart"
                data-drawer-show="drawer-cart"
                data-drawer-placement="right"
                aria-controls="drawer-cart"
                class="p-2 text-white bg-blue-600 hover:bg-blue-600/90 focus:ring-4 focus:outline-none focus:ring-blue-600/50 font-medium rounded-full text-sm text-center inline-flex items-center dark:focus:ring-blue-600/55">
          <svg class="h-5 w-5" fill="none" stroke="currentColor"
               stroke-width="1.5" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
          </svg>
        </button>
        <a href="src/pages/user_detail.html">
          <button type="button"
                  class="p-2 text-white bg-blue-600 hover:bg-blue-600/90 focus:ring-4 focus:outline-none focus:ring-blue-600/50 font-medium rounded-full text-sm text-center inline-flex items-center dark:focus:ring-blue-600/55">
            <svg class="h-5 w-5" fill="none" stroke="currentColor"
                 stroke-width="1.5" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
            </svg>
          </button>
        </a>
        <button type="button"
                id="dropdownMenuIconButton"
                data-dropdown-toggle="dropdownDots"
                class="p-2 text-white bg-blue-600 hover:bg-blue-600/90 focus:ring-4 focus:outline-none focus:ring-blue-600/50 font-medium rounded-full text-sm text-center inline-flex items-center dark:focus:ring-blue-600/55">
          <svg class="h-5 w-5" fill="none" stroke="currentColor"
               stroke-width="1.5" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>
        </button>
        <div id="dropdownDots"
             class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownMenuIconButton">
            <li>
              <a href="src/pages/user_suscription.html"
                 class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Suscription</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <div id="drawer-cart"
       class="fixed w-full xs:w-96 top-0 right-0 z-50 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white dark:bg-gray-800"
       aria-labelledby="drawer-cart-right-label">
    <h5 id="drawer-right-label"
        class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
      Listado
      carrito</h5>
    <button type="button" data-drawer-hide="drawer-right-example"
            aria-controls="drawer-right-example"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
      close
      <span class="sr-only">Close menu</span>
    </button>
    <div
      class="flex flex-col xxs:flex-row justify-evenly items-center gap-2">
      <div
        class="p-3 bg-white border border-gray-200 rounded-lg shadow">
        <p class="font-normal text-gray-700">
          Total: $1234
        </p>
      </div>
      <a
        href="/src/pages/checkout.html"
        class="h-12 px-12 py-2.5 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-center">
        Ir a Pagar
      </a>
    </div>
    <div class="w-full flex flex-col gap-4 my-4 items-center">
      <div
        class="relative flex flex-col justify-center items-center gap-2 w-4/5 xs:max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow">
        <div
          class="flex w-full flex-col xxs:flex-row justify-center items-center">
          <img
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            class="h-20 w-20 bg-gray-700 basis-1/2 object-contain rounded-lg"
            alt="..."/>
          <div
            class="flex w-full basis-1/2 justify-center items-center">nombre
          </div>
        </div>
        <div
          class="flex w-full xxs:flex-row flex-col justify-center items-center">
          <div
            class="w-full h-full flex flex-col items-center">
            <div class="text-gray-400 line-through">$100</div>
            <div class="flex items-center flex-col gap-2">
              <div class="text-red-600 text-2xl font-bold">$60</div>
              <div
                class="text-red-600 text-xs xs:text-sm rounded-full bg-red-100">
                -40%
                descuento
              </div>
            </div>
          </div>
          <div
            class="w-full h-full flex flex-col justify-center items-center">
            <p class="font-bold my-2">Cantidad</p>
            <div
              class="w-full flex xxs:flex-row flex-col justify-center items-center gap-4">
              <div
                class="h-10 border-2 rounded-full flex justify-center items-center">
                <div class="flex gap-2 px-2">
                  <button>
                    <svg class="h-6 w-6" fill="none" stroke="currentColor"
                         stroke-width="1.5" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg"
                         aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M18 12H6"></path>

                    </svg>
                  </button>
                  <p class="mx-2">0</p>
                  <button>
                    <svg class="h-6 w-6" fill="none" stroke="currentColor"
                         stroke-width="1.5" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg"
                         aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 6v12m6-6H6"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="absolute right-2 top-2">delete</button>
      </div>
      <div
        class="relative flex flex-col justify-center items-center gap-2 w-4/5 xs:max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow">
        <div
          class="flex w-full flex-col xxs:flex-row justify-center items-center">
          <img
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            class="h-20 w-20 bg-gray-700 basis-1/2 object-contain rounded-lg"
            alt="..."/>
          <div
            class="flex w-full basis-1/2 justify-center items-center">nombre
          </div>
        </div>
        <div
          class="flex w-full xxs:flex-row flex-col justify-center items-center">
          <div
            class="w-full h-full flex flex-col items-center">
            <div class="text-gray-400 line-through">$100</div>
            <div class="flex items-center flex-col gap-2">
              <div class="text-red-600 text-2xl font-bold">$60</div>
              <div
                class="text-red-600 text-xs xs:text-sm rounded-full bg-red-100">
                -40%
                descuento
              </div>
            </div>
          </div>
          <div
            class="w-full h-full flex flex-col justify-center items-center">
            <p class="font-bold my-2">Cantidad</p>
            <div
              class="w-full flex xxs:flex-row flex-col justify-center items-center gap-4">
              <div
                class="h-10 border-2 rounded-full flex justify-center items-center">
                <div class="flex gap-2 px-2">
                  <button>
                    <svg class="h-6 w-6" fill="none" stroke="currentColor"
                         stroke-width="1.5" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg"
                         aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M18 12H6"></path>

                    </svg>
                  </button>
                  <p class="mx-2">0</p>
                  <button>
                    <svg class="h-6 w-6" fill="none" stroke="currentColor"
                         stroke-width="1.5" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg"
                         aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 6v12m6-6H6"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="absolute right-2 top-2">delete</button>
      </div>
      <div
        class="relative flex flex-col justify-center items-center gap-2 w-4/5 xs:max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow">
        <div
          class="flex w-full flex-col xxs:flex-row justify-center items-center">
          <img
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            class="h-20 w-20 bg-gray-700 basis-1/2 object-contain rounded-lg"
            alt="..."/>
          <div
            class="flex w-full basis-1/2 justify-center items-center">nombre
          </div>
        </div>
        <div
          class="flex w-full xxs:flex-row flex-col justify-center items-center">
          <div
            class="w-full h-full flex flex-col items-center">
            <div class="text-gray-400 line-through">$100</div>
            <div class="flex items-center flex-col gap-2">
              <div class="text-red-600 text-2xl font-bold">$60</div>
              <div
                class="text-red-600 text-xs xs:text-sm rounded-full bg-red-100">
                -40%
                descuento
              </div>
            </div>
          </div>
          <div
            class="w-full h-full flex flex-col justify-center items-center">
            <p class="font-bold my-2">Cantidad</p>
            <div
              class="w-full flex xxs:flex-row flex-col justify-center items-center gap-4">
              <div
                class="h-10 border-2 rounded-full flex justify-center items-center">
                <div class="flex gap-2 px-2">
                  <button>
                    <svg class="h-6 w-6" fill="none" stroke="currentColor"
                         stroke-width="1.5" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg"
                         aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M18 12H6"></path>

                    </svg>
                  </button>
                  <p class="mx-2">0</p>
                  <button>
                    <svg class="h-6 w-6" fill="none" stroke="currentColor"
                         stroke-width="1.5" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg"
                         aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 6v12m6-6H6"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="absolute right-2 top-2">delete</button>
      </div>
      <div
        class="relative flex flex-col justify-center items-center gap-2 w-4/5 xs:max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow">
        <div
          class="flex w-full flex-col xxs:flex-row justify-center items-center">
          <img
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            class="h-20 w-20 bg-gray-700 basis-1/2 object-contain rounded-lg"
            alt="..."/>
          <div
            class="flex w-full basis-1/2 justify-center items-center">nombre
          </div>
        </div>
        <div
          class="flex w-full xxs:flex-row flex-col justify-center items-center">
          <div
            class="w-full h-full flex flex-col items-center">
            <div class="text-gray-400 line-through">$100</div>
            <div class="flex items-center flex-col gap-2">
              <div class="text-red-600 text-2xl font-bold">$60</div>
              <div
                class="text-red-600 text-xs xs:text-sm rounded-full bg-red-100">
                -40%
                descuento
              </div>
            </div>
          </div>
          <div
            class="w-full h-full flex flex-col justify-center items-center">
            <p class="font-bold my-2">Cantidad</p>
            <div
              class="w-full flex xxs:flex-row flex-col justify-center items-center gap-4">
              <div
                class="h-10 border-2 rounded-full flex justify-center items-center">
                <div class="flex gap-2 px-2">
                  <button>
                    <svg class="h-6 w-6" fill="none" stroke="currentColor"
                         stroke-width="1.5" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg"
                         aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M18 12H6"></path>

                    </svg>
                  </button>
                  <p class="mx-2">0</p>
                  <button>
                    <svg class="h-6 w-6" fill="none" stroke="currentColor"
                         stroke-width="1.5" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg"
                         aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 6v12m6-6H6"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="absolute right-2 top-2">delete</button>
      </div>
      <div
        class="relative flex flex-col justify-center items-center gap-2 w-4/5 xs:max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow">
        <div
          class="flex w-full flex-col xxs:flex-row justify-center items-center">
          <img
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            class="h-20 w-20 bg-gray-700 basis-1/2 object-contain rounded-lg"
            alt="..."/>
          <div
            class="flex w-full basis-1/2 justify-center items-center">nombre
          </div>
        </div>
        <div
          class="flex w-full xxs:flex-row flex-col justify-center items-center">
          <div
            class="w-full h-full flex flex-col items-center">
            <div class="text-gray-400 line-through">$100</div>
            <div class="flex items-center flex-col gap-2">
              <div class="text-red-600 text-2xl font-bold">$60</div>
              <div
                class="text-red-600 text-xs xs:text-sm rounded-full bg-red-100">
                -40%
                descuento
              </div>
            </div>
          </div>
          <div
            class="w-full h-full flex flex-col justify-center items-center">
            <p class="font-bold my-2">Cantidad</p>
            <div
              class="w-full flex xxs:flex-row flex-col justify-center items-center gap-4">
              <div
                class="h-10 border-2 rounded-full flex justify-center items-center">
                <div class="flex gap-2 px-2">
                  <button>
                    <svg class="h-6 w-6" fill="none" stroke="currentColor"
                         stroke-width="1.5" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg"
                         aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M18 12H6"></path>

                    </svg>
                  </button>
                  <p class="mx-2">0</p>
                  <button>
                    <svg class="h-6 w-6" fill="none" stroke="currentColor"
                         stroke-width="1.5" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg"
                         aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 6v12m6-6H6"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="absolute right-2 top-2">delete</button>
      </div>
      <div
        class="relative flex flex-col justify-center items-center gap-2 w-4/5 xs:max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow">
        <div
          class="flex w-full flex-col xxs:flex-row justify-center items-center">
          <img
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            class="h-20 w-20 bg-gray-700 basis-1/2 object-contain rounded-lg"
            alt="..."/>
          <div
            class="flex w-full basis-1/2 justify-center items-center">nombre
          </div>
        </div>
        <div
          class="flex w-full xxs:flex-row flex-col justify-center items-center">
          <div
            class="w-full h-full flex flex-col items-center">
            <div class="text-gray-400 line-through">$100</div>
            <div class="flex items-center flex-col gap-2">
              <div class="text-red-600 text-2xl font-bold">$60</div>
              <div
                class="text-red-600 text-xs xs:text-sm rounded-full bg-red-100">
                -40%
                descuento
              </div>
            </div>
          </div>
          <div
            class="w-full h-full flex flex-col justify-center items-center">
            <p class="font-bold my-2">Cantidad</p>
            <div
              class="w-full flex xxs:flex-row flex-col justify-center items-center gap-4">
              <div
                class="h-10 border-2 rounded-full flex justify-center items-center">
                <div class="flex gap-2 px-2">
                  <button>
                    <svg class="h-6 w-6" fill="none" stroke="currentColor"
                         stroke-width="1.5" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg"
                         aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M18 12H6"></path>

                    </svg>
                  </button>
                  <p class="mx-2">0</p>
                  <button>
                    <svg class="h-6 w-6" fill="none" stroke="currentColor"
                         stroke-width="1.5" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg"
                         aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 6v12m6-6H6"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="absolute right-2 top-2">delete</button>
      </div>
      <div
        class="relative flex flex-col justify-center items-center gap-2 w-4/5 xs:max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow">
        <div
          class="flex w-full flex-col xxs:flex-row justify-center items-center">
          <img
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            class="h-20 w-20 bg-gray-700 basis-1/2 object-contain rounded-lg"
            alt="..."/>
          <div
            class="flex w-full basis-1/2 justify-center items-center">nombre
          </div>
        </div>
        <div
          class="flex w-full xxs:flex-row flex-col justify-center items-center">
          <div
            class="w-full h-full flex flex-col items-center">
            <div class="text-gray-400 line-through">$100</div>
            <div class="flex items-center flex-col gap-2">
              <div class="text-red-600 text-2xl font-bold">$60</div>
              <div
                class="text-red-600 text-xs xs:text-sm rounded-full bg-red-100">
                -40%
                descuento
              </div>
            </div>
          </div>
          <div
            class="w-full h-full flex flex-col justify-center items-center">
            <p class="font-bold my-2">Cantidad</p>
            <div
              class="w-full flex xxs:flex-row flex-col justify-center items-center gap-4">
              <div
                class="h-10 border-2 rounded-full flex justify-center items-center">
                <div class="flex gap-2 px-2">
                  <button>
                    <svg class="h-6 w-6" fill="none" stroke="currentColor"
                         stroke-width="1.5" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg"
                         aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M18 12H6"></path>

                    </svg>
                  </button>
                  <p class="mx-2">0</p>
                  <button>
                    <svg class="h-6 w-6" fill="none" stroke="currentColor"
                         stroke-width="1.5" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg"
                         aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 6v12m6-6H6"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="absolute right-2 top-2">delete</button>
      </div>
      <div
        class="relative flex flex-col justify-center items-center gap-2 w-4/5 xs:max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow">
        <div
          class="flex w-full flex-col xxs:flex-row justify-center items-center">
          <img
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            class="h-20 w-20 bg-gray-700 basis-1/2 object-contain rounded-lg"
            alt="..."/>
          <div
            class="flex w-full basis-1/2 justify-center items-center">nombre
          </div>
        </div>
        <div
          class="flex w-full xxs:flex-row flex-col justify-center items-center">
          <div
            class="w-full h-full flex flex-col items-center">
            <div class="text-gray-400 line-through">$100</div>
            <div class="flex items-center flex-col gap-2">
              <div class="text-red-600 text-2xl font-bold">$60</div>
              <div
                class="text-red-600 text-xs xs:text-sm rounded-full bg-red-100">
                -40%
                descuento
              </div>
            </div>
          </div>
          <div
            class="w-full h-full flex flex-col justify-center items-center">
            <p class="font-bold my-2">Cantidad</p>
            <div
              class="w-full flex xxs:flex-row flex-col justify-center items-center gap-4">
              <div
                class="h-10 border-2 rounded-full flex justify-center items-center">
                <div class="flex gap-2 px-2">
                  <button>
                    <svg class="h-6 w-6" fill="none" stroke="currentColor"
                         stroke-width="1.5" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg"
                         aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M18 12H6"></path>

                    </svg>
                  </button>
                  <p class="mx-2">0</p>
                  <button>
                    <svg class="h-6 w-6" fill="none" stroke="currentColor"
                         stroke-width="1.5" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg"
                         aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 6v12m6-6H6"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="absolute right-2 top-2">delete</button>
      </div>
    </div>
  </div>


  <div id="default-carousel" class="relative w-full z-0"
       data-carousel="slide">
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <a href="#">
          <img
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            class="absolute top-1/2 left-1/2 block h-full w-full -translate-x-1/2 -translate-y-1/2 object-contain"
            alt="..."/>
        </a>
      </div>
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <a href="#">
          <img
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            class="absolute top-1/2 left-1/2 block h-full w-full -translate-x-1/2 -translate-y-1/2 object-contain"
            alt="..."/>
        </a>
      </div>
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <a href="#">
          <img
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            class="absolute top-1/2 left-1/2 block h-full w-full -translate-x-1/2 -translate-y-1/2 object-contain"
            alt="..."/>
        </a>
      </div>
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <a href="#">
          <img
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            class="absolute top-1/2 left-1/2 block h-full w-full -translate-x-1/2 -translate-y-1/2 object-contain"
            alt="..."/>
        </a>
      </div>
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <a href="#">
          <img
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            class="absolute top-1/2 left-1/2 block h-full w-full -translate-x-1/2 -translate-y-1/2 object-contain"
            alt="..."/>
        </a>
      </div>
    </div>
    <div
      class="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
      <button type="button" class="h-3 w-3 rounded-full"
              aria-current="true" aria-label="Slide 1"
              data-carousel-slide-to="0"></button>
      <button type="button" class="h-3 w-3 rounded-full"
              aria-current="false" aria-label="Slide 2"
              data-carousel-slide-to="1"></button>
      <button type="button" class="h-3 w-3 rounded-full"
              aria-current="false" aria-label="Slide 3"
              data-carousel-slide-to="2"></button>
      <button type="button" class="h-3 w-3 rounded-full"
              aria-current="false" aria-label="Slide 4"
              data-carousel-slide-to="3"></button>
      <button type="button" class="h-3 w-3 rounded-full"
              aria-current="false" aria-label="Slide 5"
              data-carousel-slide-to="4"></button>
    </div>
    <button type="button"
            class="absolute top-0 left-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 group focus:outline-none"
            data-carousel-prev>
        <span
          class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-400/30 group-hover:bg-gray-500/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 sm:h-10 sm:w-10 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
            <svg aria-hidden="true"
                 class="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
                 fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round"
                                                          stroke-linejoin="round"
                                                          stroke-width="2"
                                                          d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button"
            class="absolute top-0 right-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 group focus:outline-none"
            data-carousel-next>
        <span
          class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-400/30 group-hover:bg-gray-500/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 sm:h-10 sm:w-10 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
            <svg aria-hidden="true"
                 class="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
                 fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round"
                                                          stroke-linejoin="round"
                                                          stroke-width="2"
                                                          d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
  </div>
  <div class="h-full w-full flex justify-center items-center">
    <div class="my-6 flex h-56 w-full gap-6 overflow-x-auto">
      <div class="h-52 w-52">
        <div
          class="h-52 w-52 flex flex-col rounded-lg border border-gray-200 bg-white shadow">
          <div class="h-full w-full basis-2/3">
            <div
              class="uk-inline-clip uk-transition-toggle uk-light">
              <span
                class="absolute top-2 right-0 mr-2 rounded-lg bg-red-600 p-2 text-sm font-medium text-white">
                -40%
              </span>
              <img
                class="h-full w-full rounded-t-lg object-contain"
                src="https://images.unsplash.com/photo-1679215805559-3f8000e4b6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""/>
              <div class="uk-position-center">
                <a href="#">
                  <button
                    class="rounded-lg bg-yellow-400 px-5 text-center text-sm font-medium text-white uk-transition-fade py-1">

                    Agregar al carrito
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="mx-auto basis-1/3">
            <div
              class="my-2 w-full font-medium">
              <a href="#">Nombre del producto</a>
            </div>
            <div class="flex w-full items-center gap-2">
              <div class="text-gray-400 line-through">$100</div>
              <div class="text-2xl font-bold text-red-600">
                $60
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-52 w-52">
        <div
          class="h-52 w-52 flex flex-col rounded-lg border border-gray-200 bg-white shadow">
          <div class="h-full w-full basis-2/3">
            <div
              class="uk-inline-clip uk-transition-toggle uk-light">
              <span
                class="absolute top-2 right-0 mr-2 rounded-lg bg-red-600 p-2 text-sm font-medium text-white">
                -40%
              </span>
              <img
                class="h-full w-full rounded-t-lg object-contain"
                src="https://images.unsplash.com/photo-1679215805559-3f8000e4b6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""/>
              <div class="uk-position-center">
                <a href="#">
                  <button
                    class="rounded-lg bg-yellow-400 px-5 text-center text-sm font-medium text-white uk-transition-fade py-1">

                    Agregar al carrito
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="mx-auto basis-1/3">
            <div
              class="my-2 w-full font-medium">
              <a href="#">Nombre del producto</a>
            </div>
            <div class="flex w-full items-center gap-2">
              <div class="text-gray-400 line-through">$100</div>
              <div class="text-2xl font-bold text-red-600">
                $60
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-52 w-52">
        <div
          class="h-52 w-52 flex flex-col rounded-lg border border-gray-200 bg-white shadow">
          <div class="h-full w-full basis-2/3">
            <div
              class="uk-inline-clip uk-transition-toggle uk-light">
              <span
                class="absolute top-2 right-0 mr-2 rounded-lg bg-red-600 p-2 text-sm font-medium text-white">
                -40%
              </span>
              <img
                class="h-full w-full rounded-t-lg object-contain"
                src="https://images.unsplash.com/photo-1679215805559-3f8000e4b6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""/>
              <div class="uk-position-center">
                <a href="#">
                  <button
                    class="rounded-lg bg-yellow-400 px-5 text-center text-sm font-medium text-white uk-transition-fade py-1">

                    Agregar al carrito
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="mx-auto basis-1/3">
            <div
              class="my-2 w-full font-medium">
              <a href="#">Nombre del producto</a>
            </div>
            <div class="flex w-full items-center gap-2">
              <div class="text-gray-400 line-through">$100</div>
              <div class="text-2xl font-bold text-red-600">
                $60
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-52 w-52">
        <div
          class="h-52 w-52 flex flex-col rounded-lg border border-gray-200 bg-white shadow">
          <div class="h-full w-full basis-2/3">
            <div
              class="uk-inline-clip uk-transition-toggle uk-light">
              <span
                class="absolute top-2 right-0 mr-2 rounded-lg bg-red-600 p-2 text-sm font-medium text-white">
                -40%
              </span>
              <img
                class="h-full w-full rounded-t-lg object-contain"
                src="https://images.unsplash.com/photo-1679215805559-3f8000e4b6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""/>
              <div class="uk-position-center">
                <a href="#">
                  <button
                    class="rounded-lg bg-yellow-400 px-5 text-center text-sm font-medium text-white uk-transition-fade py-1">

                    Agregar al carrito
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="mx-auto basis-1/3">
            <div
              class="my-2 w-full font-medium">
              <a href="#">Nombre del producto</a>
            </div>
            <div class="flex w-full items-center gap-2">
              <div class="text-gray-400 line-through">$100</div>
              <div class="text-2xl font-bold text-red-600">
                $60
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-52 w-52">
        <div
          class="h-52 w-52 flex flex-col rounded-lg border border-gray-200 bg-white shadow">
          <div class="h-full w-full basis-2/3">
            <div
              class="uk-inline-clip uk-transition-toggle uk-light">
              <span
                class="absolute top-2 right-0 mr-2 rounded-lg bg-red-600 p-2 text-sm font-medium text-white">
                -40%
              </span>
              <img
                class="h-full w-full rounded-t-lg object-contain"
                src="https://images.unsplash.com/photo-1679215805559-3f8000e4b6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""/>
              <div class="uk-position-center">
                <a href="#">
                  <button
                    class="rounded-lg bg-yellow-400 px-5 text-center text-sm font-medium text-white uk-transition-fade py-1">

                    Agregar al carrito
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="mx-auto basis-1/3">
            <div
              class="my-2 w-full font-medium">
              <a href="#">Nombre del producto</a>
            </div>
            <div class="flex w-full items-center gap-2">
              <div class="text-gray-400 line-through">$100</div>
              <div class="text-2xl font-bold text-red-600">
                $60
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-52 w-52">
        <div
          class="h-52 w-52 flex flex-col rounded-lg border border-gray-200 bg-white shadow">
          <div class="h-full w-full basis-2/3">
            <div
              class="uk-inline-clip uk-transition-toggle uk-light">
              <span
                class="absolute top-2 right-0 mr-2 rounded-lg bg-red-600 p-2 text-sm font-medium text-white">
                -40%
              </span>
              <img
                class="h-full w-full rounded-t-lg object-contain"
                src="https://images.unsplash.com/photo-1679215805559-3f8000e4b6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""/>
              <div class="uk-position-center">
                <a href="#">
                  <button
                    class="rounded-lg bg-yellow-400 px-5 text-center text-sm font-medium text-white uk-transition-fade py-1">

                    Agregar al carrito
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="mx-auto basis-1/3">
            <div
              class="my-2 w-full font-medium">
              <a href="#">Nombre del producto</a>
            </div>
            <div class="flex w-full items-center gap-2">
              <div class="text-gray-400 line-through">$100</div>
              <div class="text-2xl font-bold text-red-600">
                $60
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-52 w-52">
        <div
          class="h-52 w-52 flex flex-col rounded-lg border border-gray-200 bg-white shadow">
          <div class="h-full w-full basis-2/3">
            <div
              class="uk-inline-clip uk-transition-toggle uk-light">
              <span
                class="absolute top-2 right-0 mr-2 rounded-lg bg-red-600 p-2 text-sm font-medium text-white">
                -40%
              </span>
              <img
                class="h-full w-full rounded-t-lg object-contain"
                src="https://images.unsplash.com/photo-1679215805559-3f8000e4b6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""/>
              <div class="uk-position-center">
                <a href="#">
                  <button
                    class="rounded-lg bg-yellow-400 px-5 text-center text-sm font-medium text-white uk-transition-fade py-1">

                    Agregar al carrito
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="mx-auto basis-1/3">
            <div
              class="my-2 w-full font-medium">
              <a href="#">Nombre del producto</a>
            </div>
            <div class="flex w-full items-center gap-2">
              <div class="text-gray-400 line-through">$100</div>
              <div class="text-2xl font-bold text-red-600">
                $60
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-52 w-52">
        <div
          class="h-52 w-52 flex flex-col rounded-lg border border-gray-200 bg-white shadow">
          <div class="h-full w-full basis-2/3">
            <div
              class="uk-inline-clip uk-transition-toggle uk-light">
              <span
                class="absolute top-2 right-0 mr-2 rounded-lg bg-red-600 p-2 text-sm font-medium text-white">
                -40%
              </span>
              <img
                class="h-full w-full rounded-t-lg object-contain"
                src="https://images.unsplash.com/photo-1679215805559-3f8000e4b6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""/>
              <div class="uk-position-center">
                <a href="#">
                  <button
                    class="rounded-lg bg-yellow-400 px-5 text-center text-sm font-medium text-white uk-transition-fade py-1">

                    Agregar al carrito
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="mx-auto basis-1/3">
            <div
              class="my-2 w-full font-medium">
              <a href="#">Nombre del producto</a>
            </div>
            <div class="flex w-full items-center gap-2">
              <div class="text-gray-400 line-through">$100</div>
              <div class="text-2xl font-bold text-red-600">
                $60
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-52 w-52">
        <div
          class="h-52 w-52 flex flex-col rounded-lg border border-gray-200 bg-white shadow">
          <div class="h-full w-full basis-2/3">
            <div
              class="uk-inline-clip uk-transition-toggle uk-light">
              <span
                class="absolute top-2 right-0 mr-2 rounded-lg bg-red-600 p-2 text-sm font-medium text-white">
                -40%
              </span>
              <img
                class="h-full w-full rounded-t-lg object-contain"
                src="https://images.unsplash.com/photo-1679215805559-3f8000e4b6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""/>
              <div class="uk-position-center">
                <a href="#">
                  <button
                    class="rounded-lg bg-yellow-400 px-5 text-center text-sm font-medium text-white uk-transition-fade py-1">

                    Agregar al carrito
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="mx-auto basis-1/3">
            <div
              class="my-2 w-full font-medium">
              <a href="#">Nombre del producto</a>
            </div>
            <div class="flex w-full items-center gap-2">
              <div class="text-gray-400 line-through">$100</div>
              <div class="text-2xl font-bold text-red-600">
                $60
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-52 w-52">
        <div
          class="h-52 w-52 flex flex-col rounded-lg border border-gray-200 bg-white shadow">
          <div class="h-full w-full basis-2/3">
            <div
              class="uk-inline-clip uk-transition-toggle uk-light">
              <span
                class="absolute top-2 right-0 mr-2 rounded-lg bg-red-600 p-2 text-sm font-medium text-white">
                -40%
              </span>
              <img
                class="h-full w-full rounded-t-lg object-contain"
                src="https://images.unsplash.com/photo-1679215805559-3f8000e4b6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""/>
              <div class="uk-position-center">
                <a href="#">
                  <button
                    class="rounded-lg bg-yellow-400 px-5 text-center text-sm font-medium text-white uk-transition-fade py-1">

                    Agregar al carrito
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="mx-auto basis-1/3">
            <div
              class="my-2 w-full font-medium">
              <a href="#">Nombre del producto</a>
            </div>
            <div class="flex w-full items-center gap-2">
              <div class="text-gray-400 line-through">$100</div>
              <div class="text-2xl font-bold text-red-600">
                $60
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-52 w-52">
        <div
          class="h-52 w-52 flex flex-col rounded-lg border border-gray-200 bg-white shadow">
          <div class="h-full w-full basis-2/3">
            <div
              class="uk-inline-clip uk-transition-toggle uk-light">
              <span
                class="absolute top-2 right-0 mr-2 rounded-lg bg-red-600 p-2 text-sm font-medium text-white">
                -40%
              </span>
              <img
                class="h-full w-full rounded-t-lg object-contain"
                src="https://images.unsplash.com/photo-1679215805559-3f8000e4b6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""/>
              <div class="uk-position-center">
                <a href="#">
                  <button
                    class="rounded-lg bg-yellow-400 px-5 text-center text-sm font-medium text-white uk-transition-fade py-1">

                    Agregar al carrito
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="mx-auto basis-1/3">
            <div
              class="my-2 w-full font-medium">
              <a href="#">Nombre del producto</a>
            </div>
            <div class="flex w-full items-center gap-2">
              <div class="text-gray-400 line-through">$100</div>
              <div class="text-2xl font-bold text-red-600">
                $60
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-52 w-52">
        <div
          class="h-52 w-52 flex flex-col rounded-lg border border-gray-200 bg-white shadow">
          <div class="h-full w-full basis-2/3">
            <div
              class="uk-inline-clip uk-transition-toggle uk-light">
              <span
                class="absolute top-2 right-0 mr-2 rounded-lg bg-red-600 p-2 text-sm font-medium text-white">
                -40%
              </span>
              <img
                class="h-full w-full rounded-t-lg object-contain"
                src="https://images.unsplash.com/photo-1679215805559-3f8000e4b6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""/>
              <div class="uk-position-center">
                <a href="#">
                  <button
                    class="rounded-lg bg-yellow-400 px-5 text-center text-sm font-medium text-white uk-transition-fade py-1">

                    Agregar al carrito
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="mx-auto basis-1/3">
            <div
              class="my-2 w-full font-medium">
              <a href="#">Nombre del producto</a>
            </div>
            <div class="flex w-full items-center gap-2">
              <div class="text-gray-400 line-through">$100</div>
              <div class="text-2xl font-bold text-red-600">
                $60
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class=" my-4 md:my-8 flex w-full space-x-4">
    <div
      class="flex w-64 items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-1 after:inline-block">
    </div>
    <p
      class="text-center text-xs text-gray-500 line-clamp-3 dark:text-gray-400 md:text-sm lg:text-base">
      Track
      work across
      the
      enterprise through an open, collaborative platform. Link issues across
      Jira and ingest data from other software development tools, so your IT
      support and operations teams have richer contextual information to
      rapidly respond to requests, incidents, and changes.</p>
    <div
      class="flex w-64 items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-1 after:inline-block">
    </div>
  </div>

  <div
    class="mx-auto py-4 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center">
    <div
      class="flex flex-col gap-2 w-44 h-80 bg-white border border-gray-200 rounded-lg shadow">
      <a href="#" class="basis-3/5 w-full h-full">
        <img class="object-contain rounded-t-lg w-full h-full"
             src="https://images.unsplash.com/photo-1679214523009-6f63a063f36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
             alt=""/>
      </a>
      <div
        class="basis-2/5 w-full h-full">
        <div class="w-full flex justify-center items-center">
          <a href="#">Nombre Producto</a>
        </div>
        <div
          class="w-full flex p-2 flex-col">
          <div class="text-gray-400 line-through">$100</div>
          <div class="flex items-center gap-2">
            <div class="text-2xl font-bold">$60</div>
            <div class="text-xs">(-40% descuento)</div>
          </div>
        </div>
        <div class="w-full p-2">
          <a href="#">
            <button
              class="h-12 w-full px-5 py-2.5 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-yellow-900">
              Agregar al carrito
            </button>
          </a>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col gap-2 w-44 h-80 bg-white border border-gray-200 rounded-lg shadow">
      <a href="#" class="basis-3/5 w-full h-full">
        <img class="object-contain rounded-t-lg w-full h-full"
             src="https://images.unsplash.com/photo-1679214523009-6f63a063f36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
             alt=""/>
      </a>
      <div
        class="basis-2/5 w-full h-full">
        <div class="w-full flex justify-center items-center">
          <a href="#">Nombre Producto</a>
        </div>
        <div
          class="w-full flex p-2 flex-col">
          <div class="text-gray-400 line-through">$100</div>
          <div class="flex items-center gap-2">
            <div class="text-2xl font-bold">$60</div>
            <div class="text-xs">(-40% descuento)</div>
          </div>
        </div>
        <div class="w-full p-2">
          <a href="#">
            <button
              class="h-12 w-full px-5 py-2.5 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-yellow-900">
              Agregar al carrito
            </button>
          </a>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col gap-2 w-44 h-80 bg-white border border-gray-200 rounded-lg shadow">
      <a href="#" class="basis-3/5 w-full h-full">
        <img class="object-contain rounded-t-lg w-full h-full"
             src="https://images.unsplash.com/photo-1679214523009-6f63a063f36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
             alt=""/>
      </a>
      <div
        class="basis-2/5 w-full h-full">
        <div class="w-full flex justify-center items-center">
          <a href="#">Nombre Producto</a>
        </div>
        <div
          class="w-full flex p-2 flex-col">
          <div class="text-gray-400 line-through">$100</div>
          <div class="flex items-center gap-2">
            <div class="text-2xl font-bold">$60</div>
            <div class="text-xs">(-40% descuento)</div>
          </div>
        </div>
        <div class="w-full p-2">
          <a href="#">
            <button
              class="h-12 w-full px-5 py-2.5 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-yellow-900">
              Agregar al carrito
            </button>
          </a>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col gap-2 w-44 h-80 bg-white border border-gray-200 rounded-lg shadow">
      <a href="#" class="basis-3/5 w-full h-full">
        <img class="object-contain rounded-t-lg w-full h-full"
             src="https://images.unsplash.com/photo-1679214523009-6f63a063f36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
             alt=""/>
      </a>
      <div
        class="basis-2/5 w-full h-full">
        <div class="w-full flex justify-center items-center">
          <a href="#">Nombre Producto</a>
        </div>
        <div
          class="w-full flex p-2 flex-col">
          <div class="text-gray-400 line-through">$100</div>
          <div class="flex items-center gap-2">
            <div class="text-2xl font-bold">$60</div>
            <div class="text-xs">(-40% descuento)</div>
          </div>
        </div>
        <div class="w-full p-2">
          <a href="#">
            <button
              class="h-12 w-full px-5 py-2.5 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-yellow-900">
              Agregar al carrito
            </button>
          </a>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col gap-2 w-44 h-80 bg-white border border-gray-200 rounded-lg shadow">
      <a href="#" class="basis-3/5 w-full h-full">
        <img class="object-contain rounded-t-lg w-full h-full"
             src="https://images.unsplash.com/photo-1679214523009-6f63a063f36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
             alt=""/>
      </a>
      <div
        class="basis-2/5 w-full h-full">
        <div class="w-full flex justify-center items-center">
          <a href="#">Nombre Producto</a>
        </div>
        <div
          class="w-full flex p-2 flex-col">
          <div class="text-gray-400 line-through">$100</div>
          <div class="flex items-center gap-2">
            <div class="text-2xl font-bold">$60</div>
            <div class="text-xs">(-40% descuento)</div>
          </div>
        </div>
        <div class="w-full p-2">
          <a href="#">
            <button
              class="h-12 w-full px-5 py-2.5 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-yellow-900">
              Agregar al carrito
            </button>
          </a>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col gap-2 w-44 h-80 bg-white border border-gray-200 rounded-lg shadow">
      <a href="#" class="basis-3/5 w-full h-full">
        <img class="object-contain rounded-t-lg w-full h-full"
             src="https://images.unsplash.com/photo-1679214523009-6f63a063f36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
             alt=""/>
      </a>
      <div
        class="basis-2/5 w-full h-full">
        <div class="w-full flex justify-center items-center">
          <a href="#">Nombre Producto</a>
        </div>
        <div
          class="w-full flex p-2 flex-col">
          <div class="text-gray-400 line-through">$100</div>
          <div class="flex items-center gap-2">
            <div class="text-2xl font-bold">$60</div>
            <div class="text-xs">(-40% descuento)</div>
          </div>
        </div>
        <div class="w-full p-2">
          <a href="#">
            <button
              class="h-12 w-full px-5 py-2.5 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-yellow-900">
              Agregar al carrito
            </button>
          </a>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col gap-2 w-44 h-80 bg-white border border-gray-200 rounded-lg shadow">
      <a href="#" class="basis-3/5 w-full h-full">
        <img class="object-contain rounded-t-lg w-full h-full"
             src="https://images.unsplash.com/photo-1679214523009-6f63a063f36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
             alt=""/>
      </a>
      <div
        class="basis-2/5 w-full h-full">
        <div class="w-full flex justify-center items-center">
          <a href="#">Nombre Producto</a>
        </div>
        <div
          class="w-full flex p-2 flex-col">
          <div class="text-gray-400 line-through">$100</div>
          <div class="flex items-center gap-2">
            <div class="text-2xl font-bold">$60</div>
            <div class="text-xs">(-40% descuento)</div>
          </div>
        </div>
        <div class="w-full p-2">
          <a href="#">
            <button
              class="h-12 w-full px-5 py-2.5 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-yellow-900">
              Agregar al carrito
            </button>
          </a>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col gap-2 w-44 h-80 bg-white border border-gray-200 rounded-lg shadow">
      <a href="#" class="basis-3/5 w-full h-full">
        <img class="object-contain rounded-t-lg w-full h-full"
             src="https://images.unsplash.com/photo-1679214523009-6f63a063f36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
             alt=""/>
      </a>
      <div
        class="basis-2/5 w-full h-full">
        <div class="w-full flex justify-center items-center">
          <a href="#">Nombre Producto</a>
        </div>
        <div
          class="w-full flex p-2 flex-col">
          <div class="text-gray-400 line-through">$100</div>
          <div class="flex items-center gap-2">
            <div class="text-2xl font-bold">$60</div>
            <div class="text-xs">(-40% descuento)</div>
          </div>
        </div>
        <div class="w-full p-2">
          <a href="#">
            <button
              class="h-12 w-full px-5 py-2.5 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-yellow-900">
              Agregar al carrito
            </button>
          </a>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col gap-2 w-44 h-80 bg-white border border-gray-200 rounded-lg shadow">
      <a href="#" class="basis-3/5 w-full h-full">
        <img class="object-contain rounded-t-lg w-full h-full"
             src="https://images.unsplash.com/photo-1679214523009-6f63a063f36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
             alt=""/>
      </a>
      <div
        class="basis-2/5 w-full h-full">
        <div class="w-full flex justify-center items-center">
          <a href="#">Nombre Producto</a>
        </div>
        <div
          class="w-full flex p-2 flex-col">
          <div class="text-gray-400 line-through">$100</div>
          <div class="flex items-center gap-2">
            <div class="text-2xl font-bold">$60</div>
            <div class="text-xs">(-40% descuento)</div>
          </div>
        </div>
        <div class="w-full p-2">
          <a href="#">
            <button
              class="h-12 w-full px-5 py-2.5 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-yellow-900">
              Agregar al carrito
            </button>
          </a>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col gap-2 w-44 h-80 bg-white border border-gray-200 rounded-lg shadow">
      <a href="#" class="basis-3/5 w-full h-full">
        <img class="object-contain rounded-t-lg w-full h-full"
             src="https://images.unsplash.com/photo-1679214523009-6f63a063f36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
             alt=""/>
      </a>
      <div
        class="basis-2/5 w-full h-full">
        <div class="w-full flex justify-center items-center">
          <a href="#">Nombre Producto</a>
        </div>
        <div
          class="w-full flex p-2 flex-col">
          <div class="text-gray-400 line-through">$100</div>
          <div class="flex items-center gap-2">
            <div class="text-2xl font-bold">$60</div>
            <div class="text-xs">(-40% descuento)</div>
          </div>
        </div>
        <div class="w-full p-2">
          <a href="#">
            <button
              class="h-12 w-full px-5 py-2.5 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-yellow-900">
              Agregar al carrito
            </button>
          </a>
        </div>
      </div>
    </div>

  </div>
  <footer class="bg-gray-200 dark:bg-gray-900">
    <div class="mx-auto w-full container p-4 sm:p-6">
      <div class="md:flex md:justify-between">
        <div class="flex md:basis-1/2 flex-col items-center mb-6 md:mb-0">
          <a href="https://flowbite.com/" class="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg"
                 class="h-24 w-8 mr-3" alt="FlowBite Logo"/>
          </a>
          <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="https://www.facebook.com/"
               class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg class="w-5 h-5" fill="currentColor"
                   viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"/>
              </svg>
              <span class="sr-only">Facebook page</span>
            </a>
            <a href="https://www.instagram.com/"
               class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg class="w-5 h-5" fill="currentColor"
                   viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"/>
              </svg>
              <span class="sr-only">Instagram page</span>
            </a>
            <a href="https://twitter.com/"
               class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg class="w-5 h-5" fill="currentColor"
                   viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
              </svg>
              <span class="sr-only">Twitter page</span>
            </a>
          </div>
        </div>
        <div
          class="grid grid-cols-1 xxs:grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Informacion</h2>
            <ul class="text-gray-600 dark:text-gray-400">
              <li class="mb-4">
                <a href="/src/pages/404.html"
                   class="hover:underline">politica devolucion</a>
              </li>
              <li class="mb-4">
                <a href="/src/pages/404.html"
                   class="hover:underline">politica privacidad</a>
              </li>
              <li class="mb-4">
                <a href="/src/pages/404.html"
                   class="hover:underline">preguntas frecuentes</a>
              </li>
              <li>
                <a href="/src/pages/404.html"
                   class="hover:underline">terminos y condiciones</a>
              </li>
            </ul>
          </div>
          <div>
            <h2
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Servicio
              al cliente</h2>
            <ul class="text-gray-600 dark:text-gray-400">
              <li class="mb-4">
                <a href="/src/pages/404.html"
                   class="hover:underline ">formulario de contacto</a>
              </li>
              <li>
                <a href="/src/pages/404.html"
                   class="hover:underline">reclamos / sugerencias</a>
              </li>
            </ul>
          </div>
          <div>
            <h2
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Contactanos</h2>
            <ul class="text-gray-600 dark:text-gray-400">
              <li class="mb-4">
                <a href="/src/pages/404.html" class="hover:underline">+569
                  12345678</a>
              </li>
              <li class="mb-4">
                <a href="/src/pages/404.html"
                   class="hover:underline">correo@correo.com</a>
              </li>
              <li>
                <a href="/src/pages/404.html"
                   class="hover:underline">direccion 12. region.
                  chile</a>
              </li>
              <li>
                <a href="/src/pages/404.html"
                   class="hover:underline">horario de atencion</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
      <div class="flex items-center justify-center">
        <span
          class="text-sm text-gray-500 text-center dark:text-gray-400">© 2023. All Rights Reserved.
          </span>
      </div>
    </div>
  </footer>
</div>
