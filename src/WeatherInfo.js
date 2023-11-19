import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemprature from "./WeatherTemprature";
export default function weatherInfo(props){
   return(
   <div className="weatherInfo">
     <h1>{props.data.city}</h1>
    <ul>
        <li>
            <FormattedDate date={props.data.date}/>
            </li>   
        <li className="text-capitalize">{props.data.description}
            </li>
    </ul>
         <div className="row">
            <div className="col-6">
                <div className="float-left">
                    <WeatherIcon code={props.data.icon}/>
                    </div>
                <div className="float-left">
                    <WeatherTemprature celsius={props.data.temperature}/>
                    </div>
                </div> 
            <div className="col-6">
         <ul>
             <li>Humidity: {props.data.humidity} %
                </li>
                    <li>wind: {Math.round(props.data.wind)} Km/h
                </li>
            </ul>
            </div>
        </div></div>);
}