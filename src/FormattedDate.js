import React from "react";
export default function formattedDate(props){
    let days=["monday","tuesday","wednesday","thrsday","friday","saturday","sunday"];
    
    let day= days(props.time.getDay());
    let hours=props.time.getHours();
    if(hours<10){
        hours=`0${hours}`;
    }

    let minutes=props.time.getMinutes();
    if(minutes<10){
   minutes=`0${minutes}`;
}

}