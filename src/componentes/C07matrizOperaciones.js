import React, { Fragment, useState } from 'react'

const C07matrizOperaciones = () => {
    const [Lista, setLista] = useState([1,2,3,4,5]);
    const [dias, setDias] = useState(["Lunes","Martes","Miercoles","Jueves"]);
    const uniendoArray = [...Lista, ...dias];

    const [numero, setNumero] = useState(6);
    const agregarNumero =() =>{
        setNumero(numero + 1);
        setLista([...Lista, numero]);
    }

    const [texto, setTexto] = useState(["Viernes","Sabado","Domingo"]);
    const agregarTexto =() => {
        setDias([...dias, ...texto]);
    }
  return (
     <Fragment>
        <h1 style={{background:"skyblue"}}>Lectura de la union de matrices</h1>
        {
            uniendoArray.map((item, index) =>
            <p key={index}>
                {index} - {index}
            </p>
           ) 
        }
        <br/>
        <h1 style={{background:"skyblue"}}>Agregar un valor a un array</h1>
        <button style={{background:"orange"}} onClick={agregarNumero}>Agrega Numero</button>
        {
            Lista.map((item, index)=>
            <p key={index}>
                {item}-{item}
            </p>
            )
        }
        <br/>
        <h1 style={{background:"skyblue"}}>Agregar un texto a un array</h1>
        <button style={{background:"yellow"}} onClick={agregarTexto}>Agrega Texto</button>
        {
            dias.map((item, index) =>
            <p key={index}>
                {item}-{index}
            </p>
            )
        }
        <br/>
     </Fragment>
  );
}

export default C07matrizOperaciones
