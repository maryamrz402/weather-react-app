import React from "react";
import FormattedDate from "./FormattedDate";
export default function weatherInfo(props){
   return(
   <div className="weatherInfo">
     <h1>{props.data.city}</h1>
    <ul>
        <li><formattedDate date={props.data.date}/></li>
        <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row">
            <div className="col-6">
             <img  src={props.data.iconUrl}alt={props.data.description}
                />
               <span className="temperature"> {props.data.temperature}</span>
               <span className="unit">°C</span>
            </div>
            <div className="col-6">
                <ul>
                    <li>precipitation: </li>
                    <li>humidity:{props.data.humidity}</li>
                    <li>wind:{props.data.wind}</li>
                </ul>
            </div>
        </div></div>);
}