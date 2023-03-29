<div
  className="flex flex-col gap-2 w-44 h-80 bg-white border border-gray-200 rounded-lg shadow">
  <a href="src/components#" className="basis-3/5 w-full h-full">
    <img className="object-contain rounded-t-lg w-full h-full"
         src="https://images.unsplash.com/photo-1679214523009-6f63a063f36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
         alt=""/>
  </a>
  <div
    className="basis-2/5 w-full h-full">
    <div className="w-full flex justify-center items-center">
      <a href="src/components#" className="text-gray-500 no-underline">
        Nombre Producto
      </a>
    </div>
    <div
      className="w-full flex p-2 flex-col">
      <div className="text-gray-400 line-through">$100</div>
      <div className="flex items-center gap-2">
        <div className="text-2xl font-bold">$60</div>
        <div className="text-xs">(-40% descuento)</div>
      </div>
    </div>
    <div className="w-full p-2">
      <button type="button"
              className="h-12 w-full p-2 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm text-center dark:focus:ring-yellow-900">
        Agregar al carrito
      </button>
    </div>
  </div>
</div>
