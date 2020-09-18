import "../css/functions.css";


const a = "dasdasd"

export const saludar = (nombre) => {

    console.log("Hola, que tal?")

    const h2 = document.createElement("h2");
    h2.innerText = "Prueba H2 By Code " + nombre;

    document.body.append(h2);
}
