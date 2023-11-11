import React,{useState} from "react";

import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";



export default function Weather(props){
    const[weatherData,setWeatherData]=useState({ready:false});
    const[city,setCity]=useState(props.defaultCity);

    
    function handleResponse(){
        setWeatherData({
        ready:true,
        coordinates:Response.data.coordinates,
        temperature:Response.data.temperature.current,
        humidity:Response.data.temperature.humidity,
        wind:Response.data.wind.speed,
       iconUrl:"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png",
        date:new Date(Response.data.time * 1000),
        description:Response.data.condition.description,
        city:Response.data.city,
        
    });
    function search(){
        const apiKey="c95d60a1e3adbeb286133f1ebebc2579";
        let apiUrl='https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric';
        axios.get(apiUrl).then(handleResponse);
        return"loading";
        

    }
        
        
         }
         function handleSubmit(event){
            event.preventDefault();
            search();

         }
         function handleCitychange(event){
            setCity(event,target.value);

         }
   
  if(weatherData.ready) {
return(
<div className="Weather">
    <form onSubmit={handleSubmit}>
        <div className="row">
           <div className="col-9">
        <input type="search"
         placeholder="Enter a City"
         className="form-control"
         autoFocus="on"
         onChange={handleCitychange}/></div>
         <div className="col-3">
        <input  type="submit" value="search"
        className="btn btn-primary"/></div></div>
    </form>
    <WeatherInfo data={weatherData}/>
    
</div>
);
}
else{
    search();
    return"loading...";
   
}
}