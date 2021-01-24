export const RECEIVE_BATERIAS = 'RECEIVE_BATERIAS';
export const CONSULTAR_PRECIO = 'CONSULTAR_PRECIO';

export function receiveBaterias() {
    let baterias = [];	
	baterias.push(
		createBateria(
			1,  
			"178mm", 
			"240mm", 
			"174mm", 
			"bateria-12V-70AH-1-autos-nafteros-gnc.png", 
			"12 V. 70 AH.", 
			"Libre de mantenimiento para autos Nafteros y GNC"
		)
	);
	baterias.push(
		createBateria(
			2,  
			"178mm", 
			"277mm", 
			"175mm", 
			"bateria-12V-75AH-2-autos-diesel.png", 
			"12 V. 75 AH.", 
			"Libre de mantenimiento para autos Diesel"
		)
	);
	baterias.push(
		createBateria(
			3,  
			"215mm", 
			"327mm", 
			"170mm", 
			"bateria-12V-100AH-3-camiones-tractores.png", 
			"12 V. 100AH. Modelo Caterpillar", 
			"Libre de mantenimiento para camiones y tractores"
		)
	);
	baterias.push(
		createBateria(
			4,  
			"194mm", 
			"370mm", 
			"176mm", 
			"bateria-12V-100AH-camionetas-diesel-modelo-sprinter-4.png", 
			"12 V. 100 AH. Baja Modelo Sprinter", 
			"Libre de mantenimiento para camionetas Diesel"
		)
	);
	baterias.push(
		createBateria(
			5,  
			"226mm", 
			"380mm", 
			"179mm", 
			"bateria-12V-110AH-5-camionetas-tractores.png", 
			"12 V. 110 AH.", 
			"Libre de mantenimiento para camiones y tractores"
		)
	);
	baterias.push(
		createBateria(
			6,  
			"204mm", 
			"508mm", 
			"214mm", 
			"bateria-12V-180AH-6-camiones-tractores.png", 
			"12 V. 180 AH.", 
			"Libre de mantenimiento para camiones y tractores de gran porte"
		)
	);
	baterias.push(
		createBateria(
			7,  
			"178mm", 
			"210mm", 
			"175mm", 
			"bateria-12V-45AH-7-ford-k.png", 
			"12 V. 45 AH. Modelo Ford K", 
			""
		)
	);
	baterias.push(
		createBateria(
			8,  
			"190mm", 
			"280mm", 
			"175mm", 
			"bateria-12V-85AH-8-modelo-ranger.png", 
			"12 V. 85 AH. Modelo Ranger", 
			""
		)
	);
	baterias.push(
		createBateria(
			9,  
			"225mm", 
			"200mm", 
			"130mm", 
			"bateria-12V-40AH-9-honda-fit-kia.png", 
			"12 V. 40 AH. Modelo NS 40", 
			"Para vehiculos modelo Honda Fit Y KIA"
		)
	);
	baterias.push(
		createBateria(
			10, 
			"210mm", 
			"280mm", 
			"173mm", 
			"bateria-12V-85AH-10-trafic-toyota-hilux.png", 
			"12 V. 85 AH. Modelo N70Z", 
			"Para vehiculos modelo trafic y Toyota Hilux"
		)
	);
	baterias.push(
		createBateria(
			11, 
			"208mm", 
			"300mm", 
			"170mm", 
			"bateria-12V-100AH-11-toyota-hilux-kia-sorento.png", 
			"12 V. 100 AH. Modelo N75Z", 
			"Para vehiculos modelo Toyota Hilux y KIA Sorento"
		)
	);
    return {
        type: RECEIVE_BATERIAS,
        baterias: baterias,
        receivedAt: Date.now()
    }
}

function createBateria(id, alto, largo, ancho, imagen, voltios, descripcion) {
	let bateria			= {
		id			: id,
		alto		: alto,
		largo		: largo,
		ancho		: ancho,
		imagen		: imagen,
		voltios		: voltios,
		descripcion	: descripcion
	};
    return bateria;
}

export function consultarPrecio(bateria) {
    let consulta = {};
    consulta.bateria = bateria;
    consulta.consulta = "detalleBateria";

    return {
        type: CONSULTAR_PRECIO,
        consulta: consulta,
        receivedAt: Date.now()
    }
}

export function consultarVolquete() {
    let consulta = {};
    consulta.consulta = "volquete";
    return {
        type: CONSULTAR_PRECIO,
        consulta: consulta,
        receivedAt: Date.now()
    }
}