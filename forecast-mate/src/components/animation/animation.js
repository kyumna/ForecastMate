import React,{useEffect,useState} from 'react'
import star from '../../images/stars.png'
import mountain_behind from '../../images/mountains_behind.png'
import moon from '../../images/moon.png'
import mountain_front from '../../images/mountains_front.png'


function Animation() {
    const [value, setValue] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setValue(window.scrollY);
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);



    // const stars=document.getElementById('stars');
    // console.log(stars+'hey')
    // const moon=document.getElementById('moon');
    // const mountBehind=document.getElementById('mountain_behind');
    // const text=document.getElementById('text');
    // const mountFront=document.getElementById('mount-front');
    // const btn=document.getElementById('btn');

    // window.addEventListener('scroll',()=>{
    //     const value=window.scrollY;
    //     stars.style.left=value+'px'

    // })

  return (
    <>
    <section>
    <img  id='star' style={{ left: `${value *0.25}px` }} src={star}></img>
    <img className='star'  style={{ top: `${value *0.25}px` }} id='moon' src={moon}></img>
    <img className='star'  style={{ top: `${value *0.5}px` }} id='mountain_behind' src={mountain_behind}></img>
    <h2 id='text'  style={{ marginRight:`${value*4}px` }}>Forecast Mate</h2>
    <a href='#' id='btn'>EXPLORE</a>
    <img id='mount-front'  style={{ top: `${value *0}px` }} src={mountain_front}></img>

    </section>
    <div className='sec'>
    
    </div>
    </>
  )
}

export default Animation