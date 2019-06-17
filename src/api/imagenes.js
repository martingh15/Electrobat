import c from "../constants/constants";
require('isomorphic-fetch');

var imagenes = {

    getAll() {

        let defaultOptions = {
            url: '',
            method: 'GET',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                "Content-Type": "application/json;charset=UTF-8",
                "Authorization": "Bearer "+localStorage.token
            },
            // cache: false,
            dataType: 'json',
        };
        return fetch(c.BASE_URL + '/imagenes', defaultOptions);
    },

};

export default imagenes;