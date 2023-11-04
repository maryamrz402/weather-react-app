import React from "react";
import "./Weather.css";

export default function Weather(){
return<div className="Weather">
    <form>
        <div className="row">
           <div className="col-9">
        <input type="search"
         placeholder="Enter a City"
         className="form-control"/></div>
         <div className="col-3">
        <input  type="submit" value="search"
        className="btn btn-primary"/></div></div>
    </form>
    <h1>Tehran</h1>
    <ul>
        <li>wednesday 07:00</li>
        <li>mostly cloudy</li>
        </ul>
        <div className="row">
            <div className="col-6">
                <img  src="https://ssl.gstatic.com/onebox/weather/64/fog.png"alt="mostly cloudy"/>
                6°C
            </div>
            <div className="col-6">
                <ul>
                    <li>precipitation: 15%</li>
                    <li>humidity: 72%</li>
                    <li>wind: 7km/h</li>
                </ul>
            </div>
        </div>
</div>
}