import { useState } from "react";
import { LayoutComponents } from "./Componentes/layotcomp"
import './Componentes/layotcomp/styles.css'
import logo from './logo.png'
import { Link,NavLink } from "react-router-dom"
import { FaHouse } from "react-icons/fa6";



export const Cadastro = () => {
    
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')

    return(

        <LayoutComponents>
            <Link to='/'className='hoome'><FaHouse/></Link>
            <form action="" className="loginForm">
                        <span className='tituloLogin'>Criar conta</span>
                        <span className='tituloLogin'><img src={logo}></img></span>

                        <div className="input">
                            <input className={email !== "" ? 'has-val diginput' : 'diginput'} type='email' value={email} onChange={e => setEmail(e.target.value)}/>
                            <span className='foco-input' data-placeholder='Email'></span>
                        </div>
                        <div className="input">
                            <input className={nome !== "" ? 'has-val diginput' : 'diginput'} type='email' value={nome} onChange={e => setNome(e.target.value)}/>
                            <span className='foco-input' data-placeholder='Nome'></span>
                        </div>
                        <div className="input">
                            <input className={senha !== "" ? 'has-val diginput' : 'diginput'}  type='password' value={senha} onChange={e => setSenha(e.target.value)}/>
                            <span className='foco-input' data-placeholder='Senha'></span>
                        </div>
                        <div className='conteinerLoginBotao'>
                            <button className="loginBotao">Login</button>
                        </div>
                        <div className="textoCentro">
                            <span className="texto">Já possui conta?</span>

                            <Link to='/Login' className='texto2'>Logar</Link>
                        </div>
                    </form>
        </LayoutComponents>
    )

}