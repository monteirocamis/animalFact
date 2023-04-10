import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = "no title";
const showBackground = true;
const background = (
  <img 
  className='background'
  alt='ocean'
  src='/images/ocean.jpg'
  />
)

const imagesList = [];
for (const animal in animals) {
   imagesList.push(<img 
key={animal} 
className='animal'
alt={animal}
src={animals[animal].image}
aria-label={animal}
role='button'
onClick={displayFact}
/> )
};

Function displayFact(event) {
const selectedAnimal =  event.target.alt;
const animalInfo = animals[selectedAnimal];
const optionIndex = Math.floor(Math.random()animalInfo.facts.length);

const funFact = animalInfo.facts[optionIndex];
document.getElementById('fact').innerHTML = funFact
}

const animalFacts = ( 
  <div>
    <h1 > {title || "Click an animal for a fun fact"} </h1>
    {showBackground && background}
      <p id='fact'></p>
    <div className="animals">
      {imagesList}
    </div>
  </div> 
)





ReactDOM.render(animalFacts, document.getElementById("root"));
