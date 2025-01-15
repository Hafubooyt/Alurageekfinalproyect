const API_URL = "https://62faaedbffd7197707f152a5.mockapi.io/prod";

const crearProducto = (imagen, categoria, nombre_prod, precio_prod, descripcion_prod) => {
    return fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            imagen,
            categoria,
            nombre_prod,
            precio_prod,
            descripcion_prod,
        }),
    });
};

export default { crearProducto };
