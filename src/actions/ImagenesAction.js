import imagenes from "../api/imagenes"

//IMAGENES
export const REQUEST_IMAGENES = 'REQUEST_IMAGENES';
export const RECEIVE_IMAGENES = 'RECEIVE_IMAGENES';
export const INVALIDATE_IMAGENES = 'INVALIDATE_IMAGENES';
export const ERROR_IMAGENES= "ERROR_IMAGENES";


export function invalidateImagenes(pedido) {
    return {
        type: INVALIDATE_IMAGENES,
        pedido
    }
}

function requestImagenes() {
    return {
        type: REQUEST_IMAGENES,
    }
}

function receiveImagenes(json) {
    return {
        type: RECEIVE_IMAGENES,
        imagenes: json,
        receivedAt: Date.now()
    }
}

function errorImagenes(error) {
    return {
        type: ERROR_IMAGENES,
        error: error,
    }
}

function fetchImagenes() {
    return dispatch => {
        dispatch(requestImagenes());
        return imagenes.getAll()
            .then(function (response) {
                if (response.status >= 400) {
                    return Promise.reject(response);
                }
                else {
                    var data = response.json();
                    return data;
                }
            })
            .then(function (data) {
                dispatch(receiveImagenes(data));
            })
            .catch(function (error) {
                console.log(error);
                switch (error.status) {
                    case 401:
                        dispatch(errorImagenes("Ingreso no autorizado"));
                        return;
                    default:
                        dispatch(errorImagenes("Error"));
                        return;
                }
            });
    }
}

function shouldFetchImagenes(state) {
    const imagenes = state.imagenes.byId;
    if (!imagenes) {
        return true
    } else if (imagenes.isFetching) {
        return false
    } else {
        return imagenes.didInvalidate;
    }
}

export function fetchImagenesIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchImagenes(getState())) {
            return dispatch(fetchImagenes())
        }
    }
}
