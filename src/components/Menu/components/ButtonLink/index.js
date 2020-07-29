import React from "react";


function ButtonLink(props) {
    //props sao objetos que a função ira receber
    //props =>{classname="o que alguem passar por objeto", href="/"}
    return (
      <a href={props.href} className={props.className}>
          Novo Vídeo
      </a>
    );
  }
  
  export default ButtonLink;