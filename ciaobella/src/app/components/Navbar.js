'use client'
import React, { Children, useState } from 'react'
import styled from 'styled-components';
import BurguerBottom from './burguer';

function Navbar() {

  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <>
      <Navcontainer>
        <h2>Ciao <span>Bella</span></h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={() => setClicked(false)} href="#h">Inicio</a>
          <a onClick={() => setClicked(false)} href="#servicios">Servicios</a>
          <a onClick={() => setClicked(false)} href="#turnos">Realizar turno</a>
          <a onClick={() => setClicked(false)} href="#nosotros">Nosotros</a>
          <a onClick={() => setClicked(false)} href="#contactos">Contactos</a>
        </div>
        <div className="burguer">
          <BurguerBottom clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
      </Navcontainer>
    </>

  );
};

export default Navbar;

const Navcontainer = styled.nav`

  h2{
   font-weight: 300;
   font-size: 38px;
   span{
   font-weight: bold;
   font-size: 46px;
   color: #d2b4de;
   }
  } 

  padding: .6rem;
  background-color: #f4ecf7;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.24);
  display: flex;
  align-items: center;
  justify-content: space-between;

  a{
  color: black;
  text-decoration: none;
  margin-right: 1rem;
  }


  .links{
  position: absolute;
  top: -700px;
  left: -2000px;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  transition: all 0.5s ease;  
  a{
    color: white;
    font-size: 2rem;
    display:block;
  }
    @media(min-width: 768px){
     position: initial;
     margin: 0;
     a{
      font-size: 1.2rem;
      color: black;
      display: inline;
     }
    }
  }  

  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center; 
    a{
    margin-top: 1rem;
    font-size: 2rem;
    color: white;
    }
  }

  .burguer {
    @media(min-width: 768px){
     display:none;
   }
  }
`
const BgDiv = styled.div`
 position: absolute;
 background-color: #8e44ad;
 top: -1000px;
 left: -1000px;
 width: 100%;
 height: 100%;
 z-index: -1;
 transition: all .5s ease;

 &.active{  
 border-radius: 0 0 80% 0;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 }
`