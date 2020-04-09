import React, {Component} from "react";
class Desarrollador extends Component {
    render() {
        return (
            <div className="desarrollador"
                 style={{width: "100%", bottom: "0", marginTop: "5px"}}>
                <p style={{textAlign: "center", fontWeight: "bold", color: "black", marginBottom: "5px", fontSize: "10px"}}>
                    Página realizada por Martín Ghiotti
                    - <a href={"https://wa.me/5493412548193"} target="_blank" rel="noopener noreferrer" style={{textAlign: "center", fontWeight: "bold", color: "black"}}>Whatsapp </a>
                    - <a href={"mailto: martinghiotti2013@gmail.com"} target="_blank" rel="noopener noreferrer" style={{textAlign: "center", fontWeight: "bold", color: "black"}}>Email</a>
                </p>
            </div>
        );
    }
}

export default Desarrollador;
