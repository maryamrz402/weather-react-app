import React from "react";
import { WeatherSvg } from "weather-icons-animated";

export default  function weatherIcon(props){
    const codeMapping ={
       "clear-sky-day":"suuny",
       "few-clouds-day":"partlycloudy",
       "scattered-clouds-day":"cloudy",
       "broken-clouds-day":"cloudy",
       "shower-rain-day":"pouring",
       "rain-day":"rainy",
       "thunderstorm-day":" lightning",
       "snow-day":"snowy",
       "mist-day":" windy-variant",
       
       

    };
     return (
     <WeatherSvg state="sunny" 
     width={64} 
     height={50} />
     );
}
        
