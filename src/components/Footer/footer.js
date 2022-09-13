import React from "react";

export default function Footer(){  

    return (
        <footer>
            <article className="container_footer">
                <div className="box-footer">
                    <div className="logo">
                        <img src="./img/logo.jpeg
                        " alt="logo tdmb"/>
                    </div>
                    <div className="terms">
                    </div>
                </div>
                
                <div className="box-footer">
                    <h2> NOSOTROS </h2>
                    <a href="#">¿Quiénes somos?</a>
    
                    <a href="#">Información coorporativa</a>
    
                    <a href="#">Trabajá con nosotros</a>
    
                    <a href="#">Contacto</a>
                </div>
    
                <div className="box-footer">
                    <h2> AYUDA </h2>
                    <a href="#">Preguntas frecuentas</a>
    
                    <a href="#">Términos de uso</a>
    
                    <a href="#">Preferencia de cookies</a>
    
                    <a href="#">Privacidad</a>
                </div>
                
                <div className="box-footer">
                    <h2> REDES SOCIALES </h2>
                
                    <a href="#"> <i className="fab fa-instagram"></i> Instagram</a> 
                       
                    <a href="#"><i className="fab fa-facebook-square"></i> Facebook</a>
                        
                    <a href="#"><i className="fab fa-youtube"></i> Youtube</a>
                       
                    <a href="#"><i className="fab fa-amazon"></i> Amazon</a>              
                </div>
             
                <div className="box-copyright">
                    <p className="integrantes"> Banfilms es un servicio de streaming gratuito que tiene como objetivo que todas las personas puedan accerder a contenido de calidad. Surge como una iniciativa de la coorporativa DI Code, encabezada y desarrollada por sus dueños fundadores Chiterer Sebastian y Cristiano Banfi.</p>
                    <hr/>
                    <p className="derechos">Todos los derechos reservados <i className="far fa-copyright"></i> 2021 <b>Banfilms</b></p>
                </div>
            </article>
        </footer>
    )

}

