<nav
  class="bg-gray-200 shadow border-gray-200 bg-white sticky w-full px-2 py-2.5 sm:px-4 z-20 top-0 left-0 border-b">
  <div
    class="order-first flex flex-wrap items-center justify-center xs:justify-start md:flex-nowrap">
    <a href="/"
       class="hover:no-underline text-gray-500 hover:text-gray-500 flex w-full basis-auto items-center justify-center xs:basis-2/4 xs:justify-start lg:basis-8/12">
      <img src="https://flowbite.com/docs/images/logo.svg"
           class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
      <span
        class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Logo</span>
    </a>
    <div class="order-3 flex w-full basis-auto md:order-2 md:basis-4/12">
      <div class="relative w-full">
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
               class="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-blue-600 focus:ring-blue-600 dark:placeholder-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white md:w-52 lg:w-60 dark:focus:border-blue-600 dark:focus:ring-blue-600"
               placeholder="Search..."/>
      </div>
    </div>
    <div
      class="md:my-0 my-3 order-2 flex w-full basis-auto justify-around xs:basis-2/4 md:order-3 md:basis-3/12">
      <a href="/admin/usuarios">
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
      <a href="/user/details">
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
            <a href="/user/suscription"
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
      href="/checkout"
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

<div className="bg-gray-200 border-b border-gray-200">
  <ul
    className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 justify-center items-center">
    <li className="mr-2">
      <a href="/admin/usuarios"
         className="inline-flex p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active group">
        <svg className="w-5 h-5 mr-2 text-blue-600" fill="none"
             stroke="currentColor" stroke-width="1.5"
             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
             aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"></path>
        </svg>
        Usuarios
      </a>
    </li>
    <li className="mr-2">
      <a href="/admin/descuentos"
         className="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 group"
         aria-current="page">
        <svg className="w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500"
             fill="none" stroke="currentColor" stroke-width="1.5"
             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
             aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M6 6h.008v.008H6V6z"></path>
        </svg>
        Descuentos
      </a>
    </li>
    <li className="mr-2">
      <a href="/admin/productos"
         className="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 group">
        <svg className="w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500"
             fill="none" stroke="currentColor" stroke-width="1.5"
             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
             aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"></path>
        </svg>
        Productos
      </a>
    </li>
  </ul>
</div>
<div className="flex justify-center items-center m-4">
  <button type="button"
          data-modal-target="add-modal"
          data-modal-toggle="add-modal"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
    Agregar
  </button>
</div>
<div tabIndex="-1" aria-hidden="true" id="add-modal"
     className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
  <div className="relative w-full h-full max-w-md md:h-auto">
    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
      <button type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-hide="add-modal">
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor"
             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
        </svg>
        <span className="sr-only">Close modal</span>
      </button>
      <div className="px-6 py-6 lg:px-8">
        <h3
          className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Crear
          nuevo x</h3>
        <form className="space-y-6" action="#">
          <div>
            <label htmlFor="email"
                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              campo1
            </label>
            <input type="email" name="email" id="email"
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                   placeholder="name@company.com" required/>
          </div>
          <button type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            boton
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table
    class="w-full text-sm text-left text-gray-500">
    <thead
      class="text-xs text-gray-700 uppercase bg-gray-50">
    <tr>
      <th scope="col" class="px-6 py-3">
        ID OFERTA
      </th>
      <th scope="col" class="px-6 py-3">
        ID PRODUCTO
      </th>
      <th scope="col" class="px-6 py-3">
        NOMBRE PRODUCTO
      </th>
      <th scope="col" class="px-6 py-3">
        PRECIO SIN DESCUENTO
      </th>
      <th scope="col" class="px-6 py-3">
        PRECIO CON DESCUENTO
      </th>
      <th scope="col" class="px-6 py-3">
        PORCENTAJE DESCUENTO
      </th>
      <th scope="col" class="px-6 py-3">
        CAUSA DESCUENTO
      </th>
      <th scope="col" class="px-6 py-3">
        ACCION
      </th>
    </tr>
    </thead>
    <tbody>
    <tr class="bg-white border-b">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        101
      </th>
      <td class="px-6 py-4">
        1001
      </td>
      <td class="px-6 py-4">
        Camisa de algodón
      </td>
      <td class="px-6 py-4">
        $25.00
      </td>
      <td class="px-6 py-4">
        $18.75
      </td>
      <td class="px-6 py-4">
        25%
      </td>
      <td class="px-6 py-4">
        Liquidación de temporada
      </td>
      <td class="px-3 py-4">
        <button type="button"
                data-modal-target="edit-modal"
                data-modal-toggle="edit-modal"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>
    </tr>
    <tr class="border-b bg-gray-50">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        102
      </th>
      <td class="px-6 py-4">
        1002
      </td>
      <td class="px-6 py-4">
        Zapatos de cuero
      </td>
      <td class="px-6 py-4">
        $80.00
      </td>
      <td class="px-6 py-4">
        $68.00
      </td>
      <td class="px-6 py-4">
        15%
      </td>
      <td class="px-6 py-4">
        Venta de primavera
      </td>
      <td class="px-3 py-4">
        <button type="button"
                data-modal-target="edit-modal"
                data-modal-toggle="edit-modal"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>

    </tr>
    <tr class="bg-white border-b">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        103
      </th>
      <td class="px-6 py-4">
        1003
      </td>
      <td class="px-6 py-4">
        Pantalones de mezclilla
      </td>
      <td class="px-6 py-4">
        $45.00
      </td>
      <td class="px-6 py-4">
        $33.75
      </td>
      <td class="px-6 py-4">
        25%
      </td>
      <td class="px-6 py-4">
        Oferta de liquidación
      </td>
      <td class="px-3 py-4">
        <button type="button"
                data-modal-target="edit-modal"
                data-modal-toggle="edit-modal"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>

    </tr>
    <tr class="border-b bg-gray-50">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        104
      </th>
      <td class="px-6 py-4">
        1004
      </td>
      <td class="px-6 py-4">
        Chaqueta de cuero
      </td>
      <td class="px-6 py-4">
        $200.0
      </td>
      <td class="px-6 py-4">
        $160.00
      </td>
      <td class="px-6 py-4">
        20%
      </td>
      <td class="px-6 py-4">
        Oferta de otoño
      </td>
      <td class="px-3 py-4">
        <button type="button"
                data-modal-target="edit-modal"
                data-modal-toggle="edit-modal"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>

    </tr>
    <tr class="bg-white border-b">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        105
      </th>
      <td class="px-6 py-4">
        1005
      </td>
      <td class="px-6 py-4">
        Vestido de seda
      </td>
      <td class="px-6 py-4">
        $120.00
      </td>
      <td class="px-6 py-4">
        $96.00
      </td>
      <td class="px-6 py-4">
        20%
      </td>
      <td class="px-6 py-4">
        Venta de verano
      </td>
      <td class="px-3 py-4">
        <button type="button"
                data-modal-target="edit-modal"
                data-modal-toggle="edit-modal"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>

    </tr>
    <tr class="border-b bg-gray-50">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        106
      </th>
      <td class="px-6 py-4">
        1006
      </td>
      <td class="px-6 py-4">
        Sombrero de paja
      </td>
      <td class="px-6 py-4">
        $20.00
      </td>
      <td class="px-6 py-4">
        $18.00
      </td>
      <td class="px-6 py-4">
        10%
      </td>
      <td class="px-6 py-4">
        Oferta de vacaciones
      </td>
      <td class="px-3 py-4">
        <button type="button"
                data-modal-target="edit-modal"
                data-modal-toggle="edit-modal"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>

    </tr>
    <tr class="bg-white border-b">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        107
      </th>
      <td class="px-6 py-4">
        1007
      </td>
      <td class="px-6 py-4">
        Blusa de encaje
      </td>
      <td class="px-6 py-4">
        $35.00
      </td>
      <td class="px-6 py-4">
        $24.50
      </td>
      <td class="px-6 py-4">
        30%
      </td>
      <td class="px-6 py-4">
        Liquidación de temporada
      </td>
      <td class="px-3 py-4">
        <button type="button"
                data-modal-target="edit-modal"
                data-modal-toggle="edit-modal"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>

    </tr>
    <tr class="border-b bg-gray-50">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        108
      </th>
      <td class="px-6 py-4">
        1008
      </td>
      <td class="px-6 py-4">
        Pantalones vaqueros
      </td>
      <td class="px-6 py-4">
        $50.00
      </td>
      <td class="px-6 py-4">
        $40.00
      </td>
      <td class="px-6 py-4">
        20%
      </td>
      <td class="px-6 py-4">
        Venta de otoño
      </td>
      <td class="px-3 py-4">
        <button type="button"
                data-modal-target="edit-modal"
                data-modal-toggle="edit-modal"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>

    </tr>
    <tr class="bg-white border-b">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        109
      </th>
      <td class="px-6 py-4">
        1009
      </td>
      <td class="px-6 py-4">
        Camiseta de algodón
      </td>
      <td class="px-6 py-4">
        $25.00
      </td>
      <td class="px-6 py-4">
        $20.00
      </td>
      <td class="px-6 py-4">
        20%
      </td>
      <td class="px-6 py-4">
        Venta de verano
      </td>
      <td class="px-3 py-4">
        <button type="button"
                data-modal-target="edit-modal"
                data-modal-toggle="edit-modal"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>

    </tr>
    <tr class="border-b bg-gray-50">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        110
      </th>
      <td class="px-6 py-4">
        1010
      </td>
      <td class="px-6 py-4">
        Sandalias de cuero
      </td>
      <td class="px-6 py-4">
        $70.00
      </td>
      <td class="px-6 py-4">
        $56.00
      </td>
      <td class="px-6 py-4">
        20%
      </td>
      <td class="px-6 py-4">
        Venta de verano
      </td>
      <td class="px-3 py-4">
        <button type="button"
                data-modal-target="edit-modal"
                data-modal-toggle="edit-modal"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>

    </tr>
    <tr class="bg-white border-b">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        111
      </th>
      <td class="px-6 py-4">
        1011
      </td>
      <td class="px-6 py-4">
        Bufanda de lana
      </td>
      <td class="px-6 py-4">
        $30.00
      </td>
      <td class="px-6 py-4">
        $27.00
      </td>
      <td class="px-6 py-4">
        10%
      </td>
      <td class="px-6 py-4">
        Venta de invierno
      </td>
      <td class="px-3 py-4">
        <button type="button"
                data-modal-target="edit-modal"
                data-modal-toggle="edit-modal"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>

    </tr>
    <tr class="border-b bg-gray-50">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        112
      </th>
      <td class="px-6 py-4">
        1012
      </td>
      <td class="px-6 py-4">
        Sombrero de lana
      </td>
      <td class="px-6 py-4">
        $45.00
      </td>
      <td class="px-6 py-4">
        $36.00
      </td>
      <td class="px-6 py-4">
        20%
      </td>
      <td class="px-6 py-4">
        Venta de invierno
      </td>
      <td class="px-3 py-4">
        <button type="button"
                data-modal-target="edit-modal"
                data-modal-toggle="edit-modal"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>

    </tr>
    <tr class="bg-white border-b">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        113
      </th>
      <td class="px-6 py-4">
        1013
      </td>
      <td class="px-6 py-4">
        Bolso de cuero
      </td>
      <td class="px-6 py-4">
        $120.00
      </td>
      <td class="px-6 py-4">
        $84.00
      </td>
      <td class="px-6 py-4">
        30%
      </td>
      <td class="px-6 py-4">
        Venta de primavera
      </td>
      <td class="px-3 py-4">
        <button type="button"
                data-modal-target="edit-modal"
                data-modal-toggle="edit-modal"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>

    </tr>
    <tr class="border-b bg-gray-50">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        114
      </th>
      <td class="px-6 py-4">
        1014
      </td>
      <td class="px-6 py-4">
        Vestido de verano
      </td>
      <td class="px-6 py-4">
        $60.00
      </td>
      <td class="px-6 py-4">
        $45.00
      </td>
      <td class="px-6 py-4">
        25%
      </td>
      <td class="px-6 py-4">
        Venta de verano
      </td>
      <td class="px-3 py-4">
        <button type="button"
                data-modal-target="edit-modal"
                data-modal-toggle="edit-modal"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>

    </tr>
    <tr class="bg-white border-b">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        115
      </th>
      <td class="px-6 py-4">
        1015
      </td>
      <td class="px-6 py-4">
        Abrigo de cuero
      </td>
      <td class="px-6 py-4">
        $280.00
      </td>
      <td class="px-6 py-4">
        $196.00
      </td>
      <td class="px-6 py-4">
        30%
      </td>
      <td class="px-6 py-4">
        Venta de invierno
      </td>
      <td class="px-3 py-4">
        <button type="button"
                data-modal-target="edit-modal"
                data-modal-toggle="edit-modal"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>

    </tr>
    <tr class="border-b bg-gray-50">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        116
      </th>
      <td class="px-6 py-4">
        1016
      </td>
      <td class="px-6 py-4">
        Zapatillas de deporte
      </td>
      <td class="px-6 py-4">
        $75.00
      </td>
      <td class="px-6 py-4">
        $56.25
      </td>
      <td class="px-6 py-4">
        25%
      </td>
      <td class="px-6 py-4">
        Venta de primavera
      </td>
      <td class="px-3 py-4">
        <button type="button"
                data-modal-target="edit-modal"
                data-modal-toggle="edit-modal"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>

    </tr>
    <tr class="bg-white border-b">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        117
      </th>
      <td class="px-6 py-4">
        1017
      </td>
      <td class="px-6 py-4">
        Cámara digital compacta
      </td>
      <td class="px-6 py-4">
        $50.00
      </td>
      <td class="px-6 py-4">
        $30.00
      </td>
      <td class="px-6 py-4">
        40%
      </td>
      <td class="px-6 py-4">
        Venta de verano
      </td>
      <td class="px-3 py-4">
        <button type="button"
                data-modal-target="edit-modal"
                data-modal-toggle="edit-modal"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>

    </tr>
    <tr class="border-b bg-gray-50">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        118
      </th>
      <td class="px-6 py-4">
        1018
      </td>
      <td class="px-6 py-4">
        Auriculares inalámbricos
      </td>
      <td class="px-6 py-4">
        $40.00
      </td>
      <td class="px-6 py-4">
        $24.00
      </td>
      <td class="px-6 py-4">
        40%
      </td>
      <td class="px-6 py-4">
        Venta de verano

      </td>
      <td class="px-3 py-4">
        <button type="button"
                data-modal-target="edit-modal"
                data-modal-toggle="edit-modal"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>

    </tr>
    <tr class="bg-white border-b">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        119
      </th>
      <td class="px-6 py-4">
        1019
      </td>
      <td class="px-6 py-4">
        Reloj inteligente
      </td>
      <td class="px-6 py-4">
        $150.00
      </td>
      <td class="px-6 py-4">
        $112.50
      </td>
      <td class="px-6 py-4">
        25%
      </td>
      <td class="px-6 py-4">
        Venta de navidad
      </td>
      <td class="px-3 py-4">
        <button type="button"
                data-modal-target="edit-modal"
                data-modal-toggle="edit-modal"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>

    </tr>
    <tr class="border-b bg-gray-50">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        120
      </th>
      <td class="px-6 py-4">
        1020
      </td>
      <td class="px-6 py-4">
        Reloj de pulsera
      </td>
      <td class="px-6 py-4">
        $25.00
      </td>
      <td class="px-6 py-4">
        $18.75
      </td>
      <td class="px-6 py-4">
        25%
      </td>
      <td class="px-6 py-4">
        Venta de invierno
      </td>
      <td class="px-3 py-4">
        <button type="button"
                data-modal-target="edit-modal"
                data-modal-toggle="edit-modal"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>

    </tr>
    </tbody>
  </table>
</div>

<div aria-hidden="true" id="edit-modal"
     class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
  <div class="relative w-full h-full max-w-md md:h-auto">
    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
      <button type="button"
              class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-hide="edit-modal">
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor"
             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
        </svg>
        <span class="sr-only">Close modal</span>
      </button>
      <div class="px-6 py-6 lg:px-8">
        <h3
          class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Editar
          x</h3>
        <form class="space-y-6" action="#">
          <div>
            <label for="email"
                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              campo1
            </label>
            <input type="email" name="email" id="email"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                   placeholder="name@company.com" required/>
          </div>
          <button type="submit"
                  class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            boton
          </button>
        </form>
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
            class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Informacion</h2>
          <ul class="text-gray-600 dark:text-gray-400">
            <li class="mb-4">
              <a href="/info"
                 class="hover:underline">politica devolucion</a>
            </li>
            <li class="mb-4">
              <a href="/info"
                 class="hover:underline">politica privacidad</a>
            </li>
            <li class="mb-4">
              <a href="/info"
                 class="hover:underline">preguntas frecuentes</a>
            </li>
            <li>
              <a href="/info"
                 class="hover:underline">terminos y condiciones</a>
            </li>
          </ul>
        </div>
        <div>
          <h2
            class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Servicio
            al cliente</h2>
          <ul class="text-gray-600 dark:text-gray-400">
            <li class="mb-4">
              <a href="/sc"
                 class="hover:underline ">formulario de contacto</a>
            </li>
            <li>
              <a href="/sc"
                 class="hover:underline">reclamos / sugerencias</a>
            </li>
          </ul>
        </div>
        <div>
          <h2
            class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contactanos</h2>
          <ul class="text-gray-600 dark:text-gray-400">
            <li class="mb-4">
              <a href="/contacto" class="hover:underline">+569
                12345678</a>
            </li>
            <li class="mb-4">
              <a href="/contacto"
                 class="hover:underline">correo@correo.com</a>
            </li>
            <li>
              <a href="/contacto"
                 class="hover:underline">direccion 12. region.
                chile</a>
            </li>
            <li>
              <a href="/contacto"
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
