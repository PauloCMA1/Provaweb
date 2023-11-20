import { Link,NavLink } from "react-router-dom"
import "./Barra.css";
import { FaHouse } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";


const Barra = () => {
  return (
    <div className="nave">
        <nav className="nav">
            <ul className="na">
                <li>
                    <NavLink to="/" className={({isActive}) => (isActive ? "ativo" : "normal")}><FaHouse/></NavLink>
                </li>
                <li>
                    <NavLink to="/Novidades" className={({isActive}) => (isActive ? "ativo" : "normal")}><FaRegStar/></NavLink>
                </li>
            </ul>           
        </nav>
    </div>
  )
}

export default Barra