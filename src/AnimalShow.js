import App from './App';
import cow from './svg/cow.svg';
import bird from './svg/bird.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';
import cat from './svg/cat.svg';
import dog from './svg/dog.svg';
import {useState} from 'react';
import './AnimalShow.css';
import './App.css';
const svgMap={bird:bird,cat:cat,gator,heart,horse,cow,dog};
//we are using object but if key and vale have same name (eg:- cow:cow  ==cow)can written like this
function AnimalShow({type}){
    const [clicks,setClicks]=useState(0);
    const handleClick=()=>{
        setClicks(clicks+1);
    };
    return (<div >
        <div className="animal-show" onClick={handleClick}>
        <img className="animal" alt="amimal.pic" src={svgMap[type]}></img>
        <img className="heart" alt="heart" src={heart} style={{width: 10+10 * clicks +'px'}}/>
            </div></div>
 );}
 export default AnimalShow;
