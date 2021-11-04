import React from "react";
import Saludo from "./components/Saludo";
import Comentario from "./components/Comentario";





function App() {
  return (
    <div className="container mt-5">
     <Saludo persona = 'Ignacio' edad={30}/>
     <Saludo persona = 'Pepe' edad={32}/>
     <Saludo persona = 'Alex' edad={33}/>
     <hr/>
     <h3>cajita de comentarios</h3>
       <Comentario urlImage="https://picsum.photos/200" persona="Ignacio" texto="ignacio es ciclista"/>
       <Comentario urlImage="https://picsum.photos/200" persona="Pepe" texto="pepe es ciclista"/>
       <Comentario urlImage="https://picsum.photos/200" persona="Alex" texto="alex es ciclista"/>
     
    </div>
  );
}

export default App;
