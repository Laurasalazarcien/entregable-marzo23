import React, { useState } from 'react'
import Card from './Card'

//Nombre del libro, autor, anio
const Formulario = () => {

    const [nombreLibro, setNombreLibro] = useState("")
    const [autor, setAutor] = useState("")
    const [anio, setAnio] = useState(0)
    const [mostrarAlerta, setMostrarAlerta] = useState(false)
    const [mensajeAlerta, setMensajeAlerta] = useState("")
    const [seMuestraCard, setSeMuestraCard] = useState(false)

    const handleChangeName = (event) => {
        setNombreLibro(event.target.value)
    }
    const handleChangeAutor = (event) => {
        setAutor(event.target.value)
    }
    const handleChangeAnio = (event) => {
        const anioInput = event.target.value;
        const anioNum = parseInt(anioInput, 10);

        if (anioNum.toString().length <= 4 || event.keyCode === 8) {
            setAnio(anioNum);
        }
    }
    const handleSubmitLibro = (event) => {
        event.preventDefault();
        const maxAnio = 2023;
        const minAnio = 1900;

        if (nombreLibro.length <= 3 || nombreLibro[0] === " ") {
            console.log('entra [libro]')
            setMostrarAlerta(true)
            setMensajeAlerta("Por favor chequea que la información sea correcta")
            return
        }
        if (autor.length <= 6) {
            console.log('entra [autor]')
            setMostrarAlerta(true)
            setMensajeAlerta("Por favor chequea que la información sea correcta")
            return
        }

        if (anio < minAnio || anio > maxAnio) {
            console.log('entra [anio]')
            setMostrarAlerta(true)
            setMensajeAlerta("Por favor chequea que la información sea correcta")
            return
        }

        setSeMuestraCard(true)
    }

    const limpiarAlerta = () => {
        setMostrarAlerta(false)
        setMensajeAlerta("")
    }

    const quitarAlerta = () => {
        let alerta = document.getElementById('alerta');
        alerta.close();
    }

    return (
        <form onSubmit={handleSubmitLibro}>
            <h2>FORMULARIOS DE LIBROS</h2>
            <div>
                <label htmlFor="anio">Nombre del libro:</label>
                <input type="text" onChange={handleChangeName} value={nombreLibro} />
            </div>
            <div>
                <label htmlFor="anio">Autor:</label>
                <input type="text" onChange={handleChangeAutor} value={autor} />
            </div>
            <div>
                <label htmlFor="anio">Año:</label>
                <input type="number" id="anio" name="anio" value={anio} onChange={handleChangeAnio} />
            </div>
            <input type="submit" value="Enviar" />
            <dialog open={mostrarAlerta} onClose={limpiarAlerta} id="alerta">
                {mensajeAlerta}
                <div><button onClick={quitarAlerta}>Cerrar</button></div>
            </dialog>
            {seMuestraCard && <Card name={nombreLibro} autor={autor} anio={anio} />}
        </form>
    )
}

export default Formulario