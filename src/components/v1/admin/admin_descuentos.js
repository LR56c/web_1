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
<div class="flex justify-center items-center m-4">
  <button type="button"
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
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
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">
          Editar
        </button>
      </td>


    </tr>
    </tbody>
  </table>
</div>
