const productsSettings = {
    async: true,
    crossDomain: true,
    url: 'http://127.0.0.1:8000/api',
    method: 'GET',
};

const offerSettings = {
    async: true,
    crossDomain: true,
    url: 'http://127.0.0.1:8000/api/offer',
    method: 'GET',
};
$(document).ready(function () {
    const ofertas = $('#ofertas')
    const productos = $('#productos')

    $.ajax(productsSettings).done(function (response) {
        $.each(response, function (i, item) {
            productos.append(
                `<div
      class="flex flex-col gap-2 w-44 h-80 bg-white border border-gray-200 rounded-lg shadow">
      <a href="../pages/product_detail.html" class="basis-3/5 flex justify-center items-center">
        <img class="object-contain rounded-t-lg max-h-32"
             src="../../imagens/muchilpokebol.png"
             alt=""/>
      </a>
      <div
        class="basis-2/5 w-full h-full">
        <div class="w-full flex justify-center items-center">
              <a class="line-clamp-1" href="../pages/product_detail.html">${item.name}</a>
        </div>
        <div
          class="w-full flex p-2 flex-col">
          <div class="text-gray-400 line-through">$${item.price}</div>
          <div class="flex items-center gap-2">
            <div class="text-2xl font-bold">
              $${Math.round(item.price - (item.price * (item.discount / 100)))}
</div>
            <div class="text-xs">(-${item.discount}% descuento)</div>
          </div>
        </div>
        <div class="w-full p-2">
          <a href="../pages/404.html">
            <button
              class="px-2 py-2.5 h-12 w-full text-white bg-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm text-center">
              Agregar al carrito
            </button>
          </a>
        </div>
      </div>
    </div>`
            )
        })
    })

    $.ajax(offerSettings).done(function (response) {
        $.each(response, function (i, item) {
            ofertas.append(
                `<div class="h-72 w-52">
        <div
          class="relative h-72 w-52 flex flex-col rounded-lg border border-gray-200 bg-white shadow">
              <span
                class="absolute top-2 right-0 mr-2 rounded-lg bg-red-600 p-2 text-sm font-medium text-white">
                -${item.discount}%
              </span>
              <div class="h-full w-full basis-2/3 flex justify-center items-center">
                <img
                  class="rounded-t-lg max-h-32 object-contain"
                  src="../../imagens/chalapuchu.png"
                  alt=""/>
            </div>
          <div class="mx-auto basis-1/3">
            <div
              class="px-2 my-2 w-full text-center font-medium">
              <a class="line-clamp-2" href="../pages/product_detail.html">${item.name}</a>
            </div>
            <div class="flex w-full items-center gap-2 justify-center">
              <div class="text-gray-400 line-through">$${item.price}</div>
              <div class="text-2xl font-bold text-red-600">
              $${Math.round(item.price - (item.price * (item.discount / 100)))}
              </div>
            </div>
            <div class="w-full flex justify-center">
            <a href="../pages/404.html">
                  <button
                    class="mb-2 rounded-lg bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br px-3 text-center text-sm font-medium text-white py-2">
                    Agregar al carrito
                  </button>
                </a>
          </div>
          </div>
        </div>
        </div>
      </div>`
            )
        })
    })
})
