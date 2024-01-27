import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import AnimalShow from './AnimalShow.js';
import './App.css';
import './AnimalShow.css'; 
function getRandomAnimal(){
  const animals = ["cow","cat","bird","dog","gator","horse"];
  
  return animals[Math.floor(Math.random() * animals.length)];
  }
console.log(getRandomAnimal());

function App(){
  const[animals, setAnimals]=useState([]);
  const handleClick=()=>{
    setAnimals([...animals, getRandomAnimal()]);
  };
  const renderAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index}/>
  });
  return(
    <div className='app'>
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renderAnimals}</div>
    </div>
  );
}

export default App;


// function App() {
//    const [count,setCount] = useState(0);
//    const handleClick= () =>{
//     setCount(count + 1);
//    };
   


  // const handleClick=function() => {  //this fun get envocked when the user click on button 
  //  console.log('Button was clicked!');

  // };
  // return (
  // <div>
  //   <button onClick={handleClick}>Add Animal</button>
  // </div>
//);

//OR simple pass that call back function directly inside the onClick Fun
 
//  return (
//     <div>
//       <button onClick={handleClick}>Add Animal</button>
//  <div>Number Of animals: {count}</div>
//  </div>
 
// );
//   }

