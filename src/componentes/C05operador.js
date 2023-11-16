import React, { Fragment } from 'react'

const C05operador = () => {
    const edad = 18;
  return (
    <Fragment>
      <h1>OPERADOR TERNARIO</h1>
      {edad >= 18? 'Mayor de edad': 'Menor de edad'}
    </Fragment>
  )
}

export default C05operador
