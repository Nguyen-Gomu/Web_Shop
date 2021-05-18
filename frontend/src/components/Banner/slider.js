import React,{useState} from 'react'
import '../Banner/style.scss'
import  ImgComp from './img'
import i1 from '../../img/00.jpg'
import i2 from '../../img/11.jpg'
import i3 from '../../img/33jpg.jpg'


const Slider = () => {
  
  let slideArr = [
  <ImgComp src={i1}/>
  ,<ImgComp src={i2}/>
  ,<ImgComp src={i3}/>,];


  const [x,setX] = useState(0);
  const goLeft=()=>{
    x=== 0 ? setX(-100*(slideArr.length-1)):setX(x+100); 
  }
  const goRight=()=>{
    x=== -100*(slideArr.length-1) ? setX(0):setX(x-100);
  }

  return (
    <div className="slider">
        {
          slideArr.map((item,index) =>{
            return(
              <div key={index} className="slide" style={{transform:`translateX(${x}%)`}}>
                {item}
              </div>
            )
        })}
            <button id="goLeft" onClick={goLeft}><i class="fas fa-chevron-left"></i></button>
            <button id="goRight" onClick={goRight}><i class="fas fa-chevron-right"></i></button>
    </div>
  )
}

export default Slider;
