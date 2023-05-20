<div className="bg-gray-200 border-b border-gray-200">
  <ul
    className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 justify-center items-center">
    <li className="mr-2">
      <a href="src/components/v1/admin#"
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
      <a href="src/components/v1/admin#"
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
      <a href="src/components/v1/admin#"
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
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
    Agregar
  </button>
</div>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table
    class="w-full text-sm text-left text-gray-500">
    <thead
      class="text-xs text-gray-700 uppercase bg-gray-50">
    <tr>
      <th scope="col" class="px-6 py-3">
        ID PRODUCTO
      </th>
      <th scope="col" class="px-6 py-3">
        PRECIO
      </th>
      <th scope="col" class="px-6 py-3">
        NOMBRE
      </th>
      <th scope="col" class="px-6 py-3">
        IMAGEN
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
        1001
      </th>
      <td class="px-6 py-4">
        $25.00
      </td>
      <td class="px-6 py-4">
        Camisa de algodón
      </td>
      <td class="px-6 py-4">
        <img
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
          class="h-12 w-12 object-contain"
          alt="..."/>

      </td>
      <td class="px-3 py-4">
        <button type="button"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>


    </tr>
    <tr class="border-b bg-gray-50">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        1002
      </th>
      <td class="px-6 py-4">
        $80.00
      </td>
      <td class="px-6 py-4">
        Zapatos de cuero
      </td>
      <td class="px-6 py-4">
        <img
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
          class="h-12 w-12 object-contain"
          alt="..."/>

      </td>
      <td class="px-3 py-4">
        <button type="button"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>


    </tr>
    <tr class="bg-white border-b">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        1003
      </th>
      <td class="px-6 py-4">
        $45.00
      </td>
      <td class="px-6 py-4">
        Pantalones de mezclilla
      </td>
      <td class="px-6 py-4">
        <img
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
          class="h-12 w-12 object-contain"
          alt="..."/>

      </td>
      <td class="px-3 py-4">
        <button type="button"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>


    </tr>
    <tr class="border-b bg-gray-50">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        1004
      </th>
      <td class="px-6 py-4">
        $200.0
      </td>
      <td class="px-6 py-4">
        Chaqueta de cuero
      </td>
      <td class="px-6 py-4">
        <img
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
          class="h-12 w-12 object-contain"
          alt="..."/>

      </td>
      <td class="px-3 py-4">
        <button type="button"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>


    </tr>
    <tr class="bg-white border-b">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        1005
      </th>
      <td class="px-6 py-4">
        $120.00
      </td>
      <td class="px-6 py-4">
        Vestido de seda
      </td>
      <td class="px-6 py-4">
        <img
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
          class="h-12 w-12 object-contain"
          alt="..."/>

      </td>
      <td class="px-3 py-4">
        <button type="button"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>


    </tr>
    <tr class="border-b bg-gray-50">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        1006
      </th>
      <td class="px-6 py-4">
        $20.00
      </td>
      <td class="px-6 py-4">
        Sombrero de paja
      </td>
      <td class="px-6 py-4">
        <img
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
          class="h-12 w-12 object-contain"
          alt="..."/>

      </td>
      <td class="px-3 py-4">
        <button type="button"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>


    </tr>
    <tr class="bg-white border-b">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        1007
      </th>
      <td class="px-6 py-4">
        $35.00
      </td>
      <td class="px-6 py-4">
        Blusa de encaje
      </td>
      <td class="px-6 py-4">
        <img
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
          class="h-12 w-12 object-contain"
          alt="..."/>

      </td>
      <td class="px-3 py-4">
        <button type="button"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>


    </tr>
    <tr class="border-b bg-gray-50">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        1008
      </th>
      <td class="px-6 py-4">
        $50.00
      </td>
      <td class="px-6 py-4">
        Pantalones vaqueros
      </td>
      <td class="px-6 py-4">
        <img
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
          class="h-12 w-12 object-contain"
          alt="..."/>

      </td>
      <td class="px-3 py-4">
        <button type="button"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>


    </tr>
    <tr class="bg-white border-b">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        1009
      </th>
      <td class="px-6 py-4">
        $25.00
      </td>
      <td class="px-6 py-4">
        Camiseta de algodón
      </td>
      <td class="px-6 py-4">
        <img
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
          class="h-12 w-12 object-contain"
          alt="..."/>

      </td>
      <td class="px-3 py-4">
        <button type="button"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>


    </tr>
    <tr class="border-b bg-gray-50">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        1010
      </th>
      <td class="px-6 py-4">
        $70.00
      </td>
      <td class="px-6 py-4">
        Sandalias de cuero
      </td>
      <td class="px-6 py-4">
        <img
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
          class="h-12 w-12 object-contain"
          alt="..."/>

      </td>
      <td class="px-3 py-4">
        <button type="button"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>


    </tr>
    <tr class="bg-white border-b">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        1011
      </th>
      <td class="px-6 py-4">
        $30.00
      </td>
      <td class="px-6 py-4">
        Bufanda de lana
      </td>
      <td class="px-6 py-4">
        <img
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
          class="h-12 w-12 object-contain"
          alt="..."/>

      </td>
      <td class="px-3 py-4">
        <button type="button"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>


    </tr>
    <tr class="border-b bg-gray-50">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        1012
      </th>
      <td class="px-6 py-4">
        $45.00
      </td>
      <td class="px-6 py-4">
        Sombrero de lana
      </td>
      <td class="px-6 py-4">
        <img
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
          class="h-12 w-12 object-contain"
          alt="..."/>

      </td>
      <td class="px-3 py-4">
        <button type="button"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>


    </tr>
    <tr class="bg-white border-b">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        1013
      </th>
      <td class="px-6 py-4">
        $120.00
      </td>
      <td class="px-6 py-4">
        Bolso de cuero
      </td>
      <td class="px-6 py-4">
        <img
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
          class="h-12 w-12 object-contain"
          alt="..."/>

      </td>
      <td class="px-3 py-4">
        <button type="button"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>


    </tr>
    <tr class="border-b bg-gray-50">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        1014
      </th>
      <td class="px-6 py-4">
        $60.00
      </td>
      <td class="px-6 py-4">
        Vestido de verano
      </td>
      <td class="px-6 py-4">
        <img
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
          class="h-12 w-12 object-contain"
          alt="..."/>

      </td>
      <td class="px-3 py-4">
        <button type="button"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>


    </tr>
    <tr class="bg-white border-b">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        1015
      </th>
      <td class="px-6 py-4">
        $280.00
      </td>
      <td class="px-6 py-4">
        Abrigo de cuero
      </td>
      <td class="px-6 py-4">
        <img
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
          class="h-12 w-12 object-contain"
          alt="..."/>

      </td>
      <td class="px-3 py-4">
        <button type="button"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>


    </tr>
    <tr class="border-b bg-gray-50">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        1016
      </th>
      <td class="px-6 py-4">
        $75.00
      </td>
      <td class="px-6 py-4">
        Zapatillas de deporte
      </td>
      <td class="px-6 py-4">
        <img
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
          class="h-12 w-12 object-contain"
          alt="..."/>

      </td>
      <td class="px-3 py-4">
        <button type="button"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>


    </tr>
    <tr class="bg-white border-b">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        1017
      </th>
      <td class="px-6 py-4">
        $50.00
      </td>
      <td class="px-6 py-4">
        Cámara digital compacta
      </td>
      <td class="px-6 py-4">
        <img
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
          class="h-12 w-12 object-contain"
          alt="..."/>

      </td>
      <td class="px-3 py-4">
        <button type="button"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>


    </tr>
    <tr class="border-b bg-gray-50">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        1018
      </th>
      <td class="px-6 py-4">
        $40.00
      </td>
      <td class="px-6 py-4">
        Auriculares inalámbricos
      </td>
      <td class="px-6 py-4">
        <img
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
          class="h-12 w-12 object-contain"
          alt="..."/>

      </td>
      <td class="px-3 py-4">
        <button type="button"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>


    </tr>
    <tr class="bg-white border-b">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        1019
      </th>
      <td class="px-6 py-4">
        $150.00
      </td>
      <td class="px-6 py-4">
        Reloj inteligente
      </td>
      <td class="px-6 py-4">
        <img
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
          class="h-12 w-12 object-contain"
          alt="..."/>

      </td>
      <td class="px-3 py-4">
        <button type="button"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>


    </tr>
    <tr class="border-b bg-gray-50">
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        1020
      </th>
      <td class="px-6 py-4">
        $25.00
      </td>
      <td class="px-6 py-4">
        Reloj de pulsera
      </td>
      <td class="px-6 py-4">
        <img
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
          class="h-12 w-12 object-contain"
          alt="..."/>

      </td>
      <td class="px-3 py-4">
        <button type="button"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>


    </tr>
    </tbody>
  </table>
</div>
