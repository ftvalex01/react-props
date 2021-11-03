import React from 'react'

const Saludo = (props) => {
    console.log(props)
    return (
        <div>
            <h1>hola {props.persona}</h1>
            <p>edad: {props.edad}</p>
        </div>
    )
}

export default Saludo
