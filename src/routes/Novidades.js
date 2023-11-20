import './Novidades.css'
import spider from './Assets/sp2.png'
import tekken from './Assets/tekken.jpg'
import bd3 from './Assets/bd3.jpg'
import alan from './Assets/Alan2.jpg'
import yakuza from './Assets/yakuza.jpg'
const Novidades = () => {
  return (
    <div>
      <div className='titulo1'>
          
        <h1>Novidades</h1>
      
      </div>
      <div className='quadros'>
        <h1 style={{paddingTop: 20}}>SPIDER-MAN 2</h1>
        <img className='imagens'src={spider}></img>
        <h2>R$270,00</h2>
        <input className='botao' type='submit' name='acao' value='Comprar'/>
    

      </div>
      <div className='quadros'>
        <h1 style={{paddingTop: 30}}>BALDUR'S GATE 3</h1>
        <img className='imagens'src={bd3}></img>
        <h2>R$270,00</h2>
        <input className='botao' type='submit' name='acao' value='Comprar'/>
    

      </div>
      <div className='quadros'>
        <h1>TEKKEN 8</h1>
        <img className='imagens'src={tekken}></img>
        <h2>R$270,00</h2>
        <input className='botao' type='submit' name='acao' value='Comprar'/>
    

      </div>
      <div className='quadros'>
        <h1>ALAN WAKE 2</h1>
        <img className='imagens'src={alan}></img>
        <h2>R$270,00</h2>
        <input className='botao' type='submit' name='acao' value='Comprar'/>
    

      </div>
      <div className='quadros'>
        <h1>LIKE A DRAGON GAIDEN</h1>
        <img className='imagens'src={yakuza}></img>
        <h2>R$270,00</h2>
        <input className='botao' type='submit' name='acao' value='Comprar'/>
    

      </div>
    </div>
  )
}

export default Novidades