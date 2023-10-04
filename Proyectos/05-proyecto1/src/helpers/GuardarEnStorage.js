export const guardarEnStorage = (key, item) => {
    // Conseguir los elementos que ya tenemos en el localStorage
    let items = JSON.parse(localStorage.getItem(key));

    // Comprobar si es un array
    if (Array.isArray(items)) {
        // Añadir dentro del array un elemento nuevo
        items.push(item);
    } else {
        // Crear un array con el nuevo elemento
        items = [item];
    }

    // Guardar en el localStorage
    localStorage.setItem(key, JSON.stringify(items));

    // Devolver objeto guardado
    return item;
}