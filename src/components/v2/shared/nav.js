<nav
  class="bg-gray-200 shadow border-gray-200 bg-white sticky w-full px-2 py-2.5 sm:px-4 z-20 top-0 left-0 border-b">
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
      class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">Listado
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
              class="text-red-600 text-xs xs:text-sm rounded-full bg-red-100">-40%
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
              class="text-red-600 text-xs xs:text-sm rounded-full bg-red-100">-40%
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
              class="text-red-600 text-xs xs:text-sm rounded-full bg-red-100">-40%
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
              class="text-red-600 text-xs xs:text-sm rounded-full bg-red-100">-40%
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
              class="text-red-600 text-xs xs:text-sm rounded-full bg-red-100">-40%
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
              class="text-red-600 text-xs xs:text-sm rounded-full bg-red-100">-40%
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
              class="text-red-600 text-xs xs:text-sm rounded-full bg-red-100">-40%
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
              class="text-red-600 text-xs xs:text-sm rounded-full bg-red-100">-40%
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
