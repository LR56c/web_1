<div class="text-center">
  <button
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    type="button" data-drawer-target="drawer-right-example"
    data-drawer-show="drawer-right-example" data-drawer-placement="right"
    aria-controls="drawer-right-example">
    right
  </button>
</div>
<div id="drawer-right-example"
     class="fixed w-full xs:w-96 top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white dark:bg-gray-800"
     aria-labelledby="drawer-right-label">
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
    <button type="button"
            class="h-12 px-12 py-2.5 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-center">
      Pagar
    </button>
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
