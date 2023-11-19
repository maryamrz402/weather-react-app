import React, { useState } from "react";

export default function WeatherTemprature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFar(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCel(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="weatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          C°{""}|
          <a href="/" onClick={showFar}>
          
            F° </a>
         
        </span>
      </div>
    );
  } else {
    let far =(props.celsius * 9 / 5) + 32;
    return (
      <div className="weatherTemperature">
        <span className="temperature">{Math.round(far)}</span>
        <span className="unit">
        <a href="/" onClick={showCel}> C°</a>
        
          {" "}  |°F
          
        </span>
      </div>
    );
  }
}