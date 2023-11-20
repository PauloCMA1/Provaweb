import { useEffect, useState } from 'react';
import Barra from './Componentes/Barra';
import { Link,NavLink } from "react-router-dom"
import logo from './logo.png'

function Header(props){


  
  
  return(
    <div className='header'>
      <div className='center'>
        <div className='header__logo'>
          <a href=''><img src={logo}></img></a>
        </div>
        <div><Barra/></div>
       
          <div className='header__loginForm'>
            <div className='criarConta'>
              <Link to='/Login' className='btn'>Login</Link>
              <Link to='/Registrar'className='btn'>Criar Conta</Link>
            </div>   
          </div>
        
      </div>
    </div>
    
  )


}

export default Header;