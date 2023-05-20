<div class="bg-gray-200 border-b border-gray-200">
  <ul
    class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 justify-center items-center">
    <li class="mr-2">
      <a href="src/components/v1/admin#"
         class="inline-flex p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active group">
        <svg class="w-5 h-5 mr-2 text-blue-600" fill="none"
             stroke="currentColor" stroke-width="1.5"
             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
             aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"></path>
        </svg>
        Usuarios
      </a>
    </li>
    <li class="mr-2">
      <a href="src/components/v1/admin#"
         class="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 group"
         aria-current="page">
        <svg class="w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500"
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
    <li class="mr-2">
      <a href="src/components/v1/admin#"
         class="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 group">
        <svg class="w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500"
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

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table
      class="w-full text-sm text-left text-gray-500">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50">
      <tr>
        <th scope="col" class="px-6 py-3">
          ID
        </th>
        <th scope="col" class="px-6 py-3">
          NOMBRE
        </th>
        <th scope="col" class="px-6 py-3">
          CORREO
        </th>
        <th scope="col" class="px-6 py-3">
          CELULAR
        </th>
        <th scope="col" class="px-6 py-3">
          DIRECCION
        </th>
        <th scope="col" class="px-6 py-3">
          ACCION
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
        class="bg-white border-b">
        <th scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          1
        </th>
        <td class="px-6 py-4">
          Maria Perez
        </td>
        <td class="px-6 py-4">
          maria.perez@gmail.com
        </td>
        <td class="px-6 py-4">
          +1 234 567 8901
        </td>
        <td class="px-6 py-4">
          123 Main St, Anytown, USA
        </td>
        <td class="px-3 py-4">
  <button type="button"
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
    Editar
  </button>
</td>

      </tr>
      <tr
        class="border-b bg-gray-50">
        <th scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          2
        </th>
        <td class="px-6 py-4">
          John Smith
        </td>
        <td class="px-6 py-4">
          john.smith@gmail.com
        </td>
        <td class="px-6 py-4">
          +1 987 654 3210
        </td>
        <td class="px-6 py-4">
          456 Elm St, Anytown, USA
        </td>
        <td class="px-3 py-4">
  <button type="button"
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
    Editar
  </button>
</td>

      </tr>
      <tr
        class="bg-white border-b">
        <th scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          3
        </th>
        <td class="px-6 py-4">
          Ana Rodriguez
        </td>
        <td class="px-6 py-4">
          ana.rodriguez@yahoo.com
        </td>
        <td class="px-6 py-4">
          +1 555 123 4567
        </td>
        <td class="px-6 py-4">
          789 Oak St, Anytown, USA
        </td>
        <td class="px-3 py-4">
  <button type="button"
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
    Editar
  </button>
</td>

      </tr>
      <tr
        class="border-b bg-gray-50">
        <th scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          4
        </th>
        <td class="px-6 py-4">
          Carlos Gonzalez
        </td>
        <td class="px-6 py-4">
          carlos.gonzalez@gmail.com
        </td>
        <td class="px-6 py-4">
          +1 555 444 3333
        </td>
        <td class="px-6 py-4">
          567 Pine St, Anytown, USA
        </td>
        <td class="px-3 py-4">
  <button type="button"
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
    Editar
  </button>
</td>

      </tr>
      <tr
        class="bg-white border-b">
        <th scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          5
        </th>
        <td class="px-6 py-4">
          Sarah Johnson
        </td>
        <td class="px-6 py-4">
          sarah.johnson@yahoo.com
        </td>
        <td class="px-6 py-4">
          +1 555 222 3333
        </td>
        <td class="px-6 py-4">
          789 Maple St, Anytown, USA
        </td>
        <td class="px-3 py-4">
  <button type="button"
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
    Editar
  </button>
</td>

      </tr>
      <tr
        class="border-b bg-gray-50">
        <th scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          6
        </th>
        <td class="px-6 py-4">
          Juan Ramirez
        </td>
        <td class="px-6 py-4">
          juan.ramirez@hotmail.com
        </td>
        <td class="px-6 py-4">
          +1 555 111 3333
        </td>
        <td class="px-6 py-4">
          123 Oak St, Anytown, USA
        </td>
        <td class="px-3 py-4">
  <button type="button"
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
    Editar
  </button>
</td>

      </tr>
      <tr
        class="bg-white border-b">
        <th scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          7
        </th>
        <td class="px-6 py-4">
          Emily Davis
        </td>
        <td class="px-6 py-4">
          emily.davis@gmail.com
        </td>
        <td class="px-6 py-4">
          +1 555 222 4444
        </td>
        <td class="px-6 py-4">
          456 Oak St, Anytown, USA
        </td>
        <td class="px-3 py-4">
  <button type="button"
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
    Editar
  </button>
</td>

      </tr>
      <tr
        class="border-b bg-gray-50">
        <th scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          8
        </th>
        <td class="px-6 py-4">
          Alicia Medina
        </td>
        <td class="px-6 py-4">
          medina.alicia@email.com
        </td>
        <td class="px-6 py-4">
          +1 555 987 6543
        </td>
        <td class="px-6 py-4">
          1234 Maple Ln, Bigtown, USA
        </td>
        <td class="px-3 py-4">
  <button type="button"
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
    Editar
  </button>
</td>

      </tr>
      <tr
        class="bg-white border-b">
        <th scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          9
        </th>
        <td class="px-6 py-4">
          Michael Thompson
        </td>
        <td class="px-6 py-4">
          michael.thompson@gmail.com
        </td>
        <td class="px-6 py-4">
          +1 555 777 9999
        </td>
        <td class="px-6 py-4">
          789 Cherry St, Anytown, USA
        </td>
        <td class="px-3 py-4">
  <button type="button"
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
    Editar
  </button>
</td>

      </tr>
      <tr
        class="border-b bg-gray-50">
        <th scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          10
        </th>
        <td class="px-6 py-4">
          Rachel Anderson
        </td>
        <td class="px-6 py-4">
          rachel.anderson@hotmail.com
        </td>
        <td class="px-6 py-4">
          +1 555 888 7777
        </td>
        <td class="px-6 py-4">
          234 Elm St, Anytown, USA
        </td>
        <td class="px-3 py-4">
  <button type="button"
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
    Editar
  </button>
</td>

      </tr>
      <tr
        class="bg-white border-b">
        <th scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          11
        </th>
        <td class="px-6 py-4">
          Thomas Jackson
        </td>
        <td class="px-6 py-4">
          thomas.jackson@yahoo.com
        </td>
        <td class="px-6 py-4">
          +1 555 999 6666
        </td>
        <td class="px-6 py-4">
          345 Maple St, Anytown, USA
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
          12
        </th>
        <td class="px-6 py-4">
          Sophia Lee
        </td>
        <td class="px-6 py-4">
          sophia.lee@gmail.com
        </td>
        <td class="px-6 py-4">
          +1 555 777 5555
        </td>
        <td class="px-6 py-4">
          456 Maple St, Anytown, USA
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
          13
        </th>
        <td class="px-6 py-4">
          William Davis
        </td>
        <td class="px-6 py-4">
          william.davis@hotmail.com
        </td>
        <td class="px-6 py-4">
          +1 555 888 9999
        </td>
        <td class="px-6 py-4">
          567 Oak St, Anytown, USA
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
          14
        </th>
        <td class="px-6 py-4">
          Madison Clark
        </td>
        <td class="px-6 py-4">
          madison.clark@gmail.com
        </td>
        <td class="px-6 py-4">
          +1 555 777 4444
        </td>
        <td class="px-6 py-4">
          678 Oak St, Anytown, USA
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
          15
        </th>
        <td class="px-6 py-4">
          Ethan Rodriguez
        </td>
        <td class="px-6 py-4">
          ethan.rodriguez@yahoo.com
        </td>
        <td class="px-6 py-4">
          +1 555 888 5555
        </td>
        <td class="px-6 py-4">
          890 Cedar Rd, Midtown, USA
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
          16
        </th>
        <td class="px-6 py-4">
          Isabella Rivera
        </td>
        <td class="px-6 py-4">
          isabella.rivera@hotmail.com
        </td>
        <td class="px-6 py-4">
          +1 555 777 3333
        </td>
        <td class="px-6 py-4">
          890 Oak St, Anytown, USA
        </td>
        <td class="px-3 py-4">
  <button type="button"
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
    Editar
  </button>
</td>

      </tr>
      <tr
        class="bg-white border-b">
        <th scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          17
        </th>
        <td class="px-6 py-4">
          Gabriel Perez
        </td>
        <td class="px-6 py-4">
          gabriel.perez@gmail.com
        </td>
        <td class="px-6 py-4">
          +1 555 888 2222
        </td>
        <td class="px-6 py-4">
          369 Spruce Ave, Anywhere, USA
        </td>
        <td class="px-3 py-4">
  <button type="button"
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
    Editar
  </button>
</td>

      </tr>
      <tr
        class="border-b bg-gray-50">
        <th scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          18
        </th>
        <td class="px-6 py-4">
          Mia Thompson
        </td>
        <td class="px-6 py-4">
          mia.thompson@yahoo.com
        </td>
        <td class="px-6 py-4">
          +1 555 777 2222
        </td>
        <td class="px-6 py-4">
          1010 Cedar St, Newtown, USA
        </td>
        <td class="px-3 py-4">
  <button type="button"
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
    Editar
  </button>
</td>

      </tr>
      <tr
        class="bg-white border-b">
        <th scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          19
        </th>
        <td class="px-6 py-4">
          Oliver Harris
        </td>
        <td class="px-6 py-4">
          oliver.harris@hotmail.com
        </td>
        <td class="px-6 py-4">
          +1 555 888 1111
        </td>
        <td class="px-6 py-4">
          345 Elm St, Anytown, USA
        </td>
        <td class="px-3 py-4">
  <button type="button"
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
    Editar
  </button>
</td>

      </tr>
      <tr
        class="border-b bg-gray-50">
        <th scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          20
        </th>
        <td class="px-6 py-4">
          Sophia Lee
        </td>
        <td class="px-6 py-4">
          sophia.lee@gmail.com
        </td>
        <td class="px-6 py-4">
          +1 555 777 1111
        </td>
        <td class="px-6 py-4">
          2468 Birch Dr, Hometown, USA
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
