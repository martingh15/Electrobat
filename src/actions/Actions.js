export const RECEIVE_BATERIAS = 'RECEIVE_BATERIAS';
export const CONSULTAR_PRECIO = 'CONSULTAR_PRECIO';

export function receiveBaterias() {
    var baterias = [];
    var bateria1 = {};
    bateria1.id = 1;
    bateria1.voltios = "12 V. 70 AH.";
    bateria1.descripcion = "Libre de mantenimiento para autos Nafteros y GNC";
    bateria1.largo = "240mm";
    bateria1.ancho = "174mm";
    bateria1.alto = "178mm";
    bateria1.imagen  = "bateria1.png";
    baterias.push(bateria1);

    var bateria2 = {};
    bateria2.id = 2;
    bateria2.voltios = "12 V. 75 AH.";
    bateria2.descripcion = "Libre de mantenimiento para autos Diesel";
    bateria2.largo = "277mm";
    bateria2.ancho = "175mm";
    bateria2.alto = "178mm";
    bateria2.imagen  = "bateria2.png";
    baterias.push(bateria2);

    var bateria3 = {};
    bateria3.id = 3;
    bateria3.voltios = "12 V. 100AH. Modelo Caterpillar";
    bateria3.descripcion = "Libre de mantenimiento para camiones y tractores";
    bateria3.largo = "327mm";
    bateria3.ancho = "170mm";
    bateria3.alto = "215mm";
    bateria3.imagen  = "bateria3.png";
    baterias.push(bateria3);

    var bateria4 = {};
    bateria4.id = 4;
    bateria4.voltios = "12 V. 100 AH. Baja Modelo Sprinter";
    bateria4.descripcion = "Libre de mantenimiento para camionetas Diesel";
    bateria4.largo = "370mm";
    bateria4.ancho = "176mm";
    bateria4.alto = "194mm";
    bateria4.imagen  = "bateria4.png";
    baterias.push(bateria4);

    var bateria5 = {};
    bateria5.id = 5;
    bateria5.voltios = "12 V. 110 AH.";
    bateria5.descripcion = "Libre de mantenimiento para camiones y tractores";
    bateria5.largo = "380mm";
    bateria5.ancho = "179mm";
    bateria5.alto = "226mm";
    bateria5.imagen  = "bateria5.png";
    baterias.push(bateria5);

    var bateria6 = {};
    bateria6.id = 6;
    bateria6.voltios = "12 V. 180 AH.";
    bateria6.descripcion = "Libre de mantenimiento para camiones y tractores de gran porte";
    bateria6.largo = "508mm";
    bateria6.ancho = "214mm";
    bateria6.alto = "204mm";
    bateria6.imagen  = "bateria6.png";
    baterias.push(bateria6);

    var bateria7 = {};
    bateria7.id = 7;
    bateria7.voltios = "12 V. 45 AH. Modelo Ford K";
    bateria7.descripcion = "";
    bateria7.largo = "210mm";
    bateria7.ancho = "175mm";
    bateria7.alto = "178mm";
    bateria7.imagen  = "bateria7.png";
    baterias.push(bateria7);

    var bateria8 = {};
    bateria8.id = 8;
    bateria8.voltios = "12 V. 85 AH. Modelo Ranger";
    bateria8.descripcion = "";
    bateria8.largo = "280mm";
    bateria8.ancho = "175mm";
    bateria8.alto = "190mm";
    bateria8.imagen  = "bateria8.png";
    baterias.push(bateria8);

    return {
        type: RECEIVE_BATERIAS,
        baterias: baterias,
        receivedAt: Date.now()
    }
}

export function consultarPrecio(bateria) {
    var consulta = {};
    consulta.bateria = bateria;
    consulta.consulta = "detalleBateria";

    return {
        type: CONSULTAR_PRECIO,
        consulta: consulta,
        receivedAt: Date.now()
    }
}

export function consultarVolquete() {
    var consulta = {};
    consulta.consulta = "volquete";
    return {
        type: CONSULTAR_PRECIO,
        consulta: consulta,
        receivedAt: Date.now()
    }
}