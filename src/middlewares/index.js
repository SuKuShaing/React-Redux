// vamos a obtener la acción y vamos a mostrarla en consola

export const logger = (store) => (next) => (action) => {
    // store es el objeto de redux, que contiene el estado y los métodos para despachar (dispatch) acciones
    // next es la función que llamaremos cuando el middleware haya terminado de procesar la acción, y la envía al reducer
    // action es la acción que estamos despachando, en este caso es un objeto con el tipo y el payload
    console.log("Estes es el objoeto action", action);
    
    // arriba va la lógica del middleware,
    // abajo llamamos a next para que pase la acción al siguiente middleware o al reducer
    return next(action);
};

export const featuring = (store) => (next) => (actionInfo) => {
    const featured = [{ name: "Editado"}, ...actionInfo.action.payload];
    const updatedActionInfo = {...actionInfo, action: {...actionInfo.action, payload: featured}};
    return next(updatedActionInfo);
}