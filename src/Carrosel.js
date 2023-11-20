
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import {register} from 'swiper/element/bundle';
register();
function Carrosel() {
  const [slidePorVez,setSlidePorVez] = useState(2)
  const data = [
    {id: '1', image: './lies.jpg' },
    {id: '2', image: './God.jpg' },
    {id: '3', image: './Cyber.png' },
    {id: '4', image: './Spider.jpg' },
    {id: '5', image: './Bald.jpg' },
  ]

  useEffect(() => {

    function Redimen(){
      if(window.innerWidth < 720){
        setSlidePorVez(1);
      }else{
        setSlidePorVez(2);
      }
    }
    Redimen();

    window.addEventListener("resize",Redimen)

    return() =>{
      window.removeEventListener("resize", Redimen)

    }
  })

  return (
    <div className="App">
          
      <Swiper slidesPerView={slidePorVez} pagination={{clickable: true}} navigation>
        {data.map( (item) => (
          <SwiperSlide key={item.id}>
            <img src= {item.image} alt='Slider' className='slide-item'>

            </img>
          </SwiperSlide>
        ))}

      </Swiper>

    </div>
  );
}

export default Carrosel;