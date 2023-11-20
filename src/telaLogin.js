import { useState } from 'react'
import logo from './logo.png'
import './telaLogin.css'
import { Link,NavLink } from "react-router-dom"
import { FaHouse } from "react-icons/fa6";
import { LayoutComponents } from './Componentes/layotcomp';

export const TelaLogin = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

  return (
    <LayoutComponents>
                <Link to='/'className='hoome'><FaHouse/></Link>
                <form action="" className="loginForm">
                    <span className='tituloLogin'>Bem-Vindo!</span>
                    <span className='tituloLogin'><img src={logo}></img></span>

                    <div className="input">
                        <input className={email !== "" ? 'has-val diginput' : 'diginput'} type='email' value={email} onChange={e => setEmail(e.target.value)}/>
                        <span className='foco-input' data-placeholder='Email'></span>
                    </div>
                    <div className="input">
                        <input className={senha !== "" ? 'has-val diginput' : 'diginput'}  type='password' value={senha} onChange={e => setSenha(e.target.value)}/>
                        <span className='foco-input' data-placeholder='Senha'></span>
                    </div>
                    <div className='conteinerLoginBotao'>
                        <button className="loginBotao">Login</button>
                    </div>
                    <div className="textoCentro">
                        <span className="texto">Não possui conta?</span>

                        <Link to='/Registrar' className='texto2'>Criar conta.</Link>
                    </div>
                </form>
    </LayoutComponents>
  )
}

