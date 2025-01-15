import apiServices from "./services/apiServices.js";

const form = document.querySelector("#addProductForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const imagen = document.querySelector('[data-input="imagen_agregar_producto"]').files[0]?.name || "";
    const categoria = document.querySelector("#categoria").value.trim();
    const nombre_prod = document.querySelector("#nombreProducto").value.trim();
    const precio_prod = document.querySelector("#precioProducto").value.trim();
    const descripcion_prod = document.querySelector("#descripcionProducto").value.trim();

    if (!imagen || !categoria || !nombre_prod || !precio_prod || !descripcion_prod) {
        alert("Por favor, completa todos los campos correctamente.");
        return;
    }

    // Llamar a la API para agregar el producto
    apiServices
        .crearProducto(imagen, categoria, nombre_prod, precio_prod, descripcion_prod)
        .then(() => {
            alert("Producto añadido exitosamente.");
            form.reset();
        })
        .catch((error) => {
            console.error("Error al añadir el producto:", error);
            alert("Hubo un error al añadir el producto. Intenta nuevamente.");
        });
});
