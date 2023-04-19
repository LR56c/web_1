const idInput = document.getElementById("id-producto");
const idTextInput = document.getElementById("id-producto-text");
const nombreInput = document.getElementById("nombre");
const porcentajeInput = document.getElementById("porcentaje");
const causaInput = document.getElementById("causa");

idInput.addEventListener("input", (e) => {
    const id = Number(e.target.value);
    const textDisable = ["text-red-600", "block"]
    const textEnable = ["hidden"]
    const inputEnable = ["focus:ring-green-500", "focus:border-green-500"]
    const inputDisable = ["focus:ring-red-500", "focus:border-red-500"]
    if (typeof id !== "number" || isNaN(id) || id <= 0) {
        idTextInput.classList.add(...textDisable);
        idTextInput.classList.remove(...textEnable);
        idInput.classList.remove(...inputEnable)
        idInput.classList.add(...inputDisable)
    } else {
        idInput.classList.add(...inputEnable)
        idTextInput.classList.add(...textEnable);
        idTextInput.classList.remove(...textDisable);
        idInput.classList.remove(...inputDisable)
    }
})

nombreInput.addEventListener("input", (e) => {
    console.log(e.target.value)
})

porcentajeInput.addEventListener("input", (e) => {
    console.log(e.target.value)
})

causaInput.addEventListener("input", (e) => {
    console.log(e.target.value)
})
