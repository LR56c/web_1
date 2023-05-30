const peticionVentas
    = $.ajax({
    async: true,
    crossDomain: true,
    // url        : 'http://ec2-18-231-153-185.sa-east-1.compute.amazonaws.com:8000/api/usuario/historial',
    url: 'http://127.0.0.1:8000/api/usuario/historial',
    method: 'GET',
    processData: false,
    contentType: false
})

const historialListBody = document.getElementById('historial-list')

peticionVentas
    .done(function (response) {
        const ventasdResponse = JSON.parse(response['ventas'])
        ventasdResponse.forEach(function (item) {
            const tr = document.createElement("tr");
            tr.classList.add("bg-white", "border-b");

            const th = document.createElement("th");
            th.setAttribute("scope", "row");
            th.setAttribute("id", `${item.id}-id`);
            th.classList.add("px-6", "py-4", "font-medium", "text-gray-900", "whitespace-nowrap");
            th.textContent = item.id;
            tr.appendChild(th);

            const tdEstado = document.createElement("td");
            tdEstado.classList.add("px-6", "py-4");
            tdEstado.setAttribute("id", `${item.id}-estado`);
            tdEstado.textContent = item.estado;
            tr.appendChild(tdEstado);

            const tdValor = document.createElement("td");
            tdValor.classList.add("px-6", "py-4");
            tdValor.setAttribute("id", `${item.id}-valor`);
            tdValor.textContent = item.valor;
            tr.appendChild(tdValor);

            const tdDireccion = document.createElement("td");
            tdDireccion.classList.add("px-6", "py-4");
            tdDireccion.setAttribute("id", `${item.id}-direccion`);
            tdDireccion.textContent = item.direccion;
            tr.appendChild(tdDireccion);

            const tdButton = document.createElement("td");
            tdButton.classList.add("px-3", "py-4");

            const button = document.createElement("button");
            button.setAttribute("type", "button");
            button.setAttribute("id", `${item.id}-button`);
            button.setAttribute("data-modal-target", "edit-modal");
            button.setAttribute("data-modal-toggle", "edit-modal");
            button.classList.add("text-white", "bg-gradient-to-r", "from-red-400", "via-red-500", "to-red-600", "hover:bg-gradient-to-br", "focus:ring-4", "focus:outline-none", "focus:ring-blue-300", "font-medium", "rounded-lg", "text-sm", "px-3", "py-1.5", "text-center");
            button.textContent = "...";
            tdButton.appendChild(button);

            tr.appendChild(tdButton);
            historialListBody.append(tr)

        })
    })




