'use client'
import React from 'react'
import style from "./Footer.module.css"
import WhatsAppButton from './icon-whatsapp';

function Footer() {
    return (

        <footer className={style.footer}>
            <div className={style.contenedor}>
             <WhatsAppButton /> 
            </div>
            <p className={style.copyright}>©2025 Salon de belleza. Todos los derechos reservado.</p>
        </footer>

    );
}


export default Footer;

