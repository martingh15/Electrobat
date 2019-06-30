export const RECEIVE_BATERIAS = 'RECEIVE_BATERIAS';

export function receiveBaterias() {
    var baterias = [];
    var bateria1 = {};
    bateria1.id = 1;
    bateria1.voltios = "12 V. 70 AH.";
    bateria1.descripcion = "Libre de mantenimiento para autos nafteros y GNC";
    bateria1.largo = "240mm";
    bateria1.ancho = "174mm";
    bateria1.alto = "178mm";
    bateria1.imagen  = "bateria1.png";
    baterias.push(bateria1);

    var bateria2 = {};
    bateria2.id = 2;
    bateria2.voltios = "12 V. 75 AH.";
    bateria2.descripcion = "Libre de mantenimiento para autos nafteros y GNC";
    bateria2.largo = "240mm";
    bateria2.ancho = "174mm";
    bateria2.alto = "178mm";
    bateria2.imagen  = "bateria2.png";
    baterias.push(bateria2);

    var bateria3 = {};
    bateria3.id = 3;
    bateria3.voltios = "12 V. 100 AH.";
    bateria3.descripcion = "Libre de mantenimiento para autos nafteros y GNC";
    bateria3.largo = "240mm";
    bateria3.ancho = "174mm";
    bateria3.alto = "178mm";
    bateria3.imagen  = "bateria3.png";
    baterias.push(bateria3);

    var bateria4 = {};
    bateria4.id = 4;
    bateria4.voltios = "12 V. 100 AH.";
    bateria4.descripcion = "Libre de mantenimiento para autos nafteros y GNC";
    bateria4.largo = "240mm";
    bateria4.ancho = "174mm";
    bateria4.alto = "178mm";
    bateria4.imagen  = "bateria4.png";
    baterias.push(bateria4);

    var bateria5 = {};
    bateria5.id = 5;
    bateria5.voltios = "12 V. 110 AH.";
    bateria5.descripcion = "Libre de mantenimiento para autos nafteros y GNC";
    bateria5.largo = "240mm";
    bateria5.ancho = "174mm";
    bateria5.alto = "178mm";
    bateria5.imagen  = "bateria5.png";
    baterias.push(bateria5);

    var bateria6 = {};
    bateria6.id = 6;
    bateria6.voltios = "12 V. 180 AH.";
    bateria6.descripcion = "Libre de mantenimiento para autos nafteros y GNC";
    bateria6.largo = "240mm";
    bateria6.ancho = "174mm";
    bateria6.alto = "178mm";
    bateria6.imagen  = "bateria6.png";
    baterias.push(bateria6);

    return {
        type: RECEIVE_BATERIAS,
        baterias: baterias,
        receivedAt: Date.now()
    }
}