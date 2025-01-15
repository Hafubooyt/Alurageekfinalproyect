const BASE_URL = "https://62faaedbffd7197707f152a5.mockapi.io";

const listaClientes = () => {
    return fetch(`${BASE_URL}/user`)
        .then((respuesta) => respuesta.json())
        .catch((error) => console.error("Error en listaClientes:", error));
};

const listaProductos = () => {
    return fetch(`${BASE_URL}/prod`)
        .then((respuesta) => respuesta.json())
        .catch((error) => console.error("Error en listaProductos:", error));
};

const crearProducto = (imagen, categoria, nombre_prod, precio_prod, descripcion_prod) => {
    return fetch(`${BASE_URL}/prod`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imagen, categoria, nombre_prod, precio_prod, descripcion_prod }),
    })
        .then((respuesta) => {
            if (!respuesta.ok) throw new Error("Error al crear el producto");
            return respuesta.json();
        })
        .catch((error) => console.error("Error en crearProducto:", error));
};

const eliminarProducto = (id) => {
    return fetch(`${BASE_URL}/prod/${id}`, { method: "DELETE" })
        .then((respuesta) => {
            if (!respuesta.ok) throw new Error("Error al eliminar el producto");
            return respuesta.json();
        })
        .catch((error) => console.error("Error en eliminarProducto:", error));
};

const detalleProducto = (id) => {
    return fetch(`${BASE_URL}/prod/${id}`)
        .then((respuesta) => respuesta.json())
        .catch((error) => console.error("Error en detalleProducto:", error));
};

const actualizarProducto = (imagen, categoria, nombre_prod, precio_prod, descripcion_prod, id) => {
    return fetch(`${BASE_URL}/prod/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imagen, categoria, nombre_prod, precio_prod, descripcion_prod }),
    })
        .then((respuesta) => {
            if (!respuesta.ok) throw new Error("Error al actualizar el producto");
            return respuesta.json();
        })
        .catch((error) => console.error("Error en actualizarProducto:", error));
};

const apiServices = {
    listaClientes,
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
};

export default apiServices;
