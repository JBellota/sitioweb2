import React, { Fragment, useState } from 'react'

const CO6matriz = () => {
    const [Lista, setLista] = useState([1,2,3,4,5]);
  return (
    <Fragment>
      <h1 style={{background:"pink"}} >Listas con index y con key</h1>
      {Lista.map((item, index) => 
      <p key = {index}> 
      {item} - {index} 
      </p>   
      )
    }
      
    </Fragment>
  )
}

export default CO6matriz
