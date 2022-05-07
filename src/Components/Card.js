// we need to code a div for a cardd wrapper and image , text for handle , text for time zone , (background color for starter data this is css) buid out 1 card only . 
// import "./App.css";
import React from 'react';



const Card = (props) => {

  return ( 
	<div className= "card" style={{ backgroundColor: props.favColor}}>
   <img className="imgsrc" src={props.imgSrc} alt="profilepic" />
     <h4></h4>
      <p className="handle"> {props.handle}</p>
      <p></p>
      <p className="time-zone">{props.timeZone}</p>
      <p className="position">{props.favColor}</p>
      
    </div>
  );
};
export default Card;

