import { useRouteError } from "react-router-dom"
import './Errorpage.css';



const ErrorPage = () => {
    const error = useRouteError();

    console.error(error)

  return (
    <div className="fundo">   
        
      <h1 style={{color: "white"}}>Ops!</h1>
      <p>Deu erro</p>
      <p>{error.status.text}</p>
      <p>{error.mensage}</p>

    </div>
  )
}

export default ErrorPage