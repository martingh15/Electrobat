import React, {Component} from "react";

//Images
import globo from "../assets/img/globe.svg";

class Desarrollador extends Component {
    render() {
        return (
            <div className="desarrollador"
                 style={{
                     width: "100%", bottom: "0", marginTop: "5px", paddingTop: "10px", display: "flex",
                     justifyContent: "center", padding: "10px 0", alignItems: "center"
                 }}>
                <img src={globo} alt="Globo" title="Globo" style={{width:"20px",marginRight: "6px"}}/>
                <p style={{textAlign: "center", fontWeight: "bold", color: "black", marginBottom: "5px",
                    fontSize: "10px",margin: "0"}}>
                    Página realizada por Martín Ghiotti:
                    <div className="breakWsp"></div>
                    <a href={"https://wa.me/5493412548193"} target="_blank" rel="noopener noreferrer" style={{textAlign: "center", fontWeight: "bold", color: "black"}}> Whatsapp </a>
                    - <a href={"mailto: martinghiotti2013@gmail.com"} target="_blank" rel="noopener noreferrer" style={{textAlign: "center", fontWeight: "bold", color: "black"}}>Email</a>
                </p>
            </div>
        );
    }
}

export default Desarrollador;
