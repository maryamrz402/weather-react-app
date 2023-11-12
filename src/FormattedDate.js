import React from "react";
export default function formattedDate(props){
    let days=["monday","tuesday","wednesday","thrsday","friday","saturday","sunday"];
    
    let day= days[props.time.getDay()];
    let hour=props.date.getHours();
    if(hour<10){
        hour=`0${hour}`;
    }

    let minutes=props.date.getMinutes();
    if(minutes<10){
   minutes=`0${minutes}`;
}

}